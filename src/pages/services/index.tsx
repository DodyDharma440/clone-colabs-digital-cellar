import React from "react";
import Head from "next/head";
import { EmailSubscription } from "@/common/layouts";
import { HeroSection } from "@/modules/services/components";

const Services = () => {
  return (
    <>
      <Head>
        <title>Colabs - Services</title>
      </Head>

      <HeroSection />
      <EmailSubscription />
    </>
  );
};

export default Services;
