import React from "react";
import Head from "next/head";
import { EmailSubscription, PageLayout } from "@/common/layouts";
import {
  HeroSection,
  ServiceDetails,
  WhyUsSection,
} from "@/modules/services/components";

const Services = () => {
  return (
    <PageLayout>
      <Head>
        <title>Colabs - Services</title>
      </Head>

      <HeroSection />
      <ServiceDetails />
      <div className="h-[600px]" />
      <WhyUsSection />

      <EmailSubscription />
    </PageLayout>
  );
};

export default Services;
