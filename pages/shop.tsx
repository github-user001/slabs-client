import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Client from "shopify-buy";
import { Product } from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "slabs-development-store.myshopify.com",
  storefrontAccessToken: "70cbea6e4c6177f4061a43b2bd5db0f9",
});

export const useShopify = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const checkout = async () => {
    //todo: check user blockchain account for existing checkoutId
    //       const checkoutId = '2U4NWNkYzI4ZWEyOTdlOD9rZXk9MDVjMzY3Zjk3YWM0YWJjNGRhMTkwMDgwYTUzOGJmYmI='

    // client.checkout.fetch(checkoutId).then((checkout) => {
    //   // Do something with the checkout
    //   console.log(checkout);
    // });

    // @ts-ignore outdated shopify TypeScript
    const { id: checkoutId, webUrl: checkoutUrl } =
      await client.checkout.create();

    //   const checkoutId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTgyMTc3ODc1OTI='; // ID of an existing checkout
    const lineItemsToAdd = [
      {
        variantId: products?.[0].variants[0].id,
        quantity: 1,
        // customAttributes: [{ key: "MyKey", value: "MyValue" }],
      },
    ];

    // Add an item to the checkout
    client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        // Do something with the updated checkout
        console.log(checkout.lineItems); // Array with one additional line item
      });

    // const shippingAddress = {
    //   address1: "Chestnut Street 92",
    //   address2: "Apartment 2",
    //   city: "Louisville",
    //   company: null,
    //   country: "United States",
    //   firstName: "Bob",
    //   lastName: "Norman",
    //   phone: "555-625-1199",
    //   province: "Kentucky",
    //   zip: "40202",
    // };

    // // Update the shipping address for an existing checkout.
    // client.checkout
    //   // @ts-ignore
    //   .updateShippingAddress(checkoutId, shippingAddress)
    //   .then((checkout) => {
    //     // Do something with the updated checkout
    //   });
    return checkoutUrl;
  };

  useEffect(() => {
    client.product
      .fetchAll()
      .then((products: Array<Product>) => {
        setProducts(products);
      })
      .catch(console.error);
  }, []);

  return { products, checkout };
};

interface ProductListProps {
  products: Array<Product>;
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div style={{ padding: 8 }}>
      <div>Products</div>
      {products.map((product) => {
        const height = product.images[0].attrs.height.value;
        const width = product.images[0].attrs.width.value;

        return (
          <div key={product.id}>
            <div> description: {product.description}</div>
            <div> id: {product.id}</div>
            <Image
              src={product.images[0].src}
              alt="Picture of our slab"
              width={width}
              height={height}
            />
          </div>
        );
      })}
    </div>
  );
};

const ShopifyPage = () => {
  const { products, checkout } = useShopify();
  const [checkoutUrl, setCheckoutUrl] = useState("");

  const handleCheckout = async () => {
    const url = await checkout();
    console.log({ url });

    setCheckoutUrl(url);
  };

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>

      {checkoutUrl && (
        <Link href={checkoutUrl}>
          <a target="_blank">
            Checkout via Shopify (todo: figure out how to do this without
            leaving site)
          </a>
        </Link>
      )}

      <button onClick={() => {}}>{checkoutUrl || ""}</button>
      <ProductList products={products} />
    </div>
  );
};

export default ShopifyPage;
