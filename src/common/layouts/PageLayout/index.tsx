import React from "react";
import { Footer, Navbar } from "..";
import SmoothScroll from "../SmoothScroll";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <SmoothScroll>
        <div className="pb-5">
          {children}
          <Footer />
        </div>
      </SmoothScroll>
    </main>
  );
};

export default PageLayout;
