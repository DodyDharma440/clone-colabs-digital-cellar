import React from "react";
import Head from "next/head";
import { HeroSection } from "@/modules/home/components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Colabs - Making space for transformative innovation</title>
      </Head>

      <HeroSection />
    </>
  );
};

export default Home;
