import React from "react";
import Head from "next/head";
import { EmailSubscription } from "@/common/layouts";
import { HeroSection, WhyUsSection } from "@/modules/services/components";

const Services = () => {
  return (
    <>
      <Head>
        <title>Colabs - Services</title>
      </Head>

      <HeroSection />
      <WhyUsSection />

      <EmailSubscription />
    </>
  );
};

export default Services;
