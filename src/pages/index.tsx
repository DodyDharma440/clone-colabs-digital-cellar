import React from "react";
import Head from "next/head";
import { EmailSubscription } from "@/common/layouts";
import {
  CtaGridSection,
  HeroSection,
  PrincipleSection,
  ServiceSection,
} from "@/modules/home/components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Colabs - Making space for transformative innovation</title>
      </Head>

      <HeroSection />
      <ServiceSection />
      <PrincipleSection />
      <CtaGridSection />

      <EmailSubscription />
    </>
  );
};

export default Home;
