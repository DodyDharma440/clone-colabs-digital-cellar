import React from "react";
import { Footer, Navbar } from "..";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="pb-5">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default PageLayout;
