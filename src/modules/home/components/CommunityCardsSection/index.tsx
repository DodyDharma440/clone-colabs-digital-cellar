import React from "react";
import { Badge, Container } from "@/common/components";
import { blogsData } from "../../constants";
import Link from "next/link";
import BlogCard from "../BlogCard";

const CommunityCardsSection = () => {
  return (
    <section className="section">
      <Container>
        <div className="md:px-10">
          <h2 className="max-w-[860px] tracking-tighter text-[34px] md:text-[54px] my-10 md:my-20">
            Space for big thinking, problem-solvers and bio-innovators
          </h2>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full mb-[30px] lg:mb-0 lg:w-[200px]">
              <Badge>Community</Badge>
            </div>
            <div className="grid grid-cols-3 w-full gap-[30px] lg:gap-[10px]">
              {blogsData.slice(0, 3).map((blog, index) => {
                return (
                  <div className="col-span-3 lg:col-span-1" key={index}>
                    <BlogCard blog={blog} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityCardsSection;
