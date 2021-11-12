import Image from "next/image";
import { NftMetadata } from "./helpers";

interface NftMetadataViewProps {
  nft: NftMetadata;
  onNftSelected: (selected: NftMetadata) => void;
}

export const NftMetadataView: React.FC<NftMetadataViewProps> = ({
  nft,
  onNftSelected,
}) => {
  return (
    <button
      onClick={() => onNftSelected(nft)}
      key={nft.name}
      style={{
        backgroundColor: "grey",
        borderRadius: 2,
        borderWidth: 2,
        borderColor: "black",
        margin: 12,
      }}
    >
      <div>name: {nft.name}</div>

      <Image
        src={nft.image}
        alt={`Image of ${nft.name}`}
        width={300}
        height={300}
      />
    </button>
  );
};
