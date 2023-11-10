import type { AppProps } from "next/app";
import { PageLayout } from "@/common/layouts";
import "@/styles/globals.css";
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
