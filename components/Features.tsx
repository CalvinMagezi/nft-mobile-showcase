import Image, { StaticImageData } from "next/image";
import React from "react";
import assets from "../public/assets";

function FeatureCard({
  iconUrl,
  iconText,
}: {
  iconUrl: StaticImageData;
  iconText: string;
}) {
  return (
    <div className="featureCard">
      <div className="relative featureImg">
        <Image src={iconUrl} layout="fill" objectFit="contain" />
      </div>
      <p className="featureText">{iconText}</p>
    </div>
  );
}

function Features() {
  return (
    <div className="section bgPrimary banner03">
      <div className="flex-col text-center subSection">
        <div>
          <h1 className="h1Text whiteText">Technologies</h1>
          <p className="pText whiteText">
            ProNef has been developed using a cross-platform technology, React
            Native.
          </p>
        </div>
        <div className="flexWrap">
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
      </div>
    </div>
  );
}

export default Features;
