import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "../lib/globalStyles";
import assets from "../public/assets";
import Button from "./Button";

interface Props {
  title: string;
  description: string;
  showBtn: boolean;
  mockupImg: StaticImageData;
  banner: string;
  reverse: boolean;
}

function SectionWrapper({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}: Props) {
  return (
    <div
      className={`min-h-screen section ${
        reverse ? "bgWhite" : "bgPrimary"
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? "boxReverseClass" : "boxClass"
        }`}
      >
        <div
          className={`descDiv ${
            reverse ? "fadeRightMini textRight" : "fadeLeftMini textLeft"
          }`}
        >
          <h1 className={`h1Text ${reverse ? "blackText" : "whiteText"}`}>
            {title}
          </h1>
          <p
            className={`descriptionText ${reverse ? "blackText" : "whiteText"}`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@calvinmagezi/nft-marketplace?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
        <div className="flex-1 flexCenter">
          <div
            className={`relative sectionImg ${
              reverse ? "fadeLeftMini" : "fadeRightMini"
            }`}
          >
            <Image src={mockupImg} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper;
