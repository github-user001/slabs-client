import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SlabPreview } from "../components/SlabPreview";
import { fetchMetadata, NftMetadata } from "../nfts/helpers";

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

  return (
    <div>
      {probablyLoading && <div>Loading......</div>}
      {error && <div>No Metadata URI received, can't fetch metadata</div>}

      {!probablyLoading && (
        <SlabPreview top={"230px"} left={"200px"} image={metadata.image} />
      )}
    </div>
  );
};
export default CheckoutPage;
