import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xe12FC29df6D2041186dF7AF9Adc1eE337a6295EA",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Geocaching Special NFT",
        description: "This 1-of-a-kind NFT for Geocaching!",
        image: readFileSync("scripts/assets/nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()