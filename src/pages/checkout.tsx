import { Button, Flex, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SlabPreview } from "../components/SlabPreview";
import { fetchMetadata, NftMetadata } from "../nfts/helpers";
import { colors } from "../theming/colors";

const useNftMetadata = (nftMetadataUri: string) => {
  const [metadata, setMetadata] = useState<NftMetadata | undefined>();
  useEffect(() => {
    if (!nftMetadataUri) return;
    const updateMetadata = async () => {
      const fetchedMetadata = await fetchMetadata(nftMetadataUri);
      setMetadata(fetchedMetadata[0]);
    };
    updateMetadata();
  }, [nftMetadataUri]);
  return metadata;
};

const CheckoutPage = () => {
  const router = useRouter();
  const metadataUri = router.query.nftMetadata as string;
  const metadata = useNftMetadata(metadataUri);

  const probablyLoading = metadata === undefined;
  const error = metadataUri === undefined;

  const handleCheckout = () => {
    alert("todo: handle checkout");
    // perform transaction on Solana
    // Send user to shopify web checkout url
  };

  return (
    <div>
      <Img
        style={{ rotate: "-11deg" }}
        src="/images/3d-grid.png"
        position="absolute"
        opacity={0.1}
        height={"2400px"}
        width={"2400px"}
      />
      {probablyLoading && <div>Loading......</div>}
      {error && <div>No Metadata URI received, can't fetch metadata</div>}

      {!probablyLoading && (
        <SlabPreview top={"25%"} left={"15%"} image={metadata.image} />
      )}
      <Flex
        style={{ position: "absolute", bottom: 0, width: "100%", padding: 38 }}
        justifyContent="flex-end"
      >
        <Button
          background={colors.borderSelected}
          color="black"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </Flex>
    </div>
  );
};
export default CheckoutPage;
