import Image from "next/image";
import React from "react";
import assets from "../public/assets";

function Download() {
  return (
    <div className="section bgWhite">
      <div className="flex-col text-center subSection">
        <div>
          <h1 className="h1Text blackText">Download the source code</h1>
          <p className="pText blackText">Get the full source code on Github</p>
        </div>
        <button
          onClick={() => {
            window.open(
              "https://github.com/CalvinMagezi/nft-marketplace",
              "_blank"
            );
          }}
          className="btnPrimary"
        >
          Source Code
        </button>
        <div className="flexContainer">
          <div className="relative w-[35rem] h-96">
            <Image src={assets.scene} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
