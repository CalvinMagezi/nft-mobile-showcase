import Image, { StaticImageData } from "next/image";
import React from "react";

function Button({
  assetUrl,
  link,
}: {
  assetUrl: StaticImageData;
  link: string;
}) {
  return (
    <div
      onClick={() => {
        window.open(link, "_blank");
      }}
      className="flex items-center space-x-4 btnBlack"
    >
      <div className="relative btnIcon">
        <Image layout="fill" objectFit="cover" src={assetUrl} alt="expo_icon" />
      </div>
      <div className="flex flex-col justify-start ml-4 ">
        <p className="text-xs font-normal btnText">View It On</p>
        <p className="text-sm font-bold btnText">Expo Store</p>
      </div>
    </div>
  );
}

export default Button;
