import React from "react";
import Head from "next/head";
import { EmailSubscription, PageLayout } from "@/common/layouts";
import {
  CommunityCardsSection,
  CommunitySlider,
  CtaGridSection,
  HeroSection,
  PrincipleSection,
  ServiceSection,
} from "@/modules/home/components";

const Home = () => {
  return (
    <PageLayout>
      <Head>
        <title>Colabs - Making space for transformative innovation</title>
      </Head>

      <HeroSection />
      <ServiceSection />
      <PrincipleSection />
      <CtaGridSection />
      <CommunitySlider />
      <CommunityCardsSection />

      <EmailSubscription />
    </PageLayout>
  );
};

export default Home;
