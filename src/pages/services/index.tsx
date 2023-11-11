import React from "react";
import Head from "next/head";
import { EmailSubscription, PageLayout } from "@/common/layouts";
import { HeroSection, WhyUsSection } from "@/modules/services/components";

const Services = () => {
  return (
    <PageLayout>
      <Head>
        <title>Colabs - Services</title>
      </Head>

      <HeroSection />
      <WhyUsSection />

      <EmailSubscription />
    </PageLayout>
  );
};

export default Services;
