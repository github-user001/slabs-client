import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchMetadata, NftMetadata } from "../nfts/helpers";
import { NftMetadataView } from "../nfts/NftMetadataView";

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

const OptionsPage = () => {
  const router = useRouter();
  const metadataUri = router.query.nftMetadata as string;
  const metadata = useNftMetadata(metadataUri);

  const probablyLoading = metadata === undefined;

  return (
    <div>
      <div>Options Selection</div>
      <div>{JSON.stringify(router.query)}</div>

      {probablyLoading && <div>Loading......</div>}
      {!probablyLoading && (
        <NftMetadataView nft={metadata} onNftSelected={() => {}} />
      )}
    </div>
  );
};
export default OptionsPage;
