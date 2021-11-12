import { PublicKey } from "@solana/web3.js";
import { devnetWaifu0 } from "./fixtures";
import { getUserNfts } from "./helpers";

const userPublicKey = new PublicKey(
  "7d5d51JoHpzkPyTxZxrKHWkQwRCw6VdStHJ8PdoM3kij"
);

describe("getUserNfts", () => {
  it("fetches metadata for all of user's NFTs", async () => {
    const nfts = await getUserNfts(userPublicKey);

    expect(nfts).toStrictEqual([devnetWaifu0]);
  });
});
