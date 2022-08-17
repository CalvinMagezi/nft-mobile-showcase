import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Download, Features, SectionWrapper } from "../components";
import assets from "../public/assets";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFT Market Mobile App Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn={true}
        mockupImg={assets.homeHero}
        banner="banner"
        reverse={false}
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef Marketplace. Smooth constant colors of a fluent UI design."
        showBtn={false}
        mockupImg={assets.homeCards}
        banner=""
        reverse={true}
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        showBtn={false}
        mockupImg={assets.feature}
        banner=""
        reverse={true}
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        showBtn={false}
        mockupImg={assets.mockup}
        banner="banner02"
        reverse={false}
      />
      <Download />
      <div className="flex-col items-center justify-center px-4 py-2 text-center bg-primary banner04">
        <p className="pText whiteText">Made with love by </p>
        <span
          onClick={() => {
            window.open("https://calvinmagezi.com", "_blank");
          }}
          className="cursor-pointer bold"
        >
          Calvin Magezi
        </span>
      </div>
    </>
  );
};

export default Home;
