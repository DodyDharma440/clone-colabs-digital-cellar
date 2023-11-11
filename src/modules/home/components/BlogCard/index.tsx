import React, { useState } from "react";
import Link from "next/link";
import { IBlog } from "../../interfaces";
import { mergeCn } from "@/common/utils/classnames";
import { Badge, NavigationCard } from "@/common/components";

type BlogCardProps = {
  blog: IBlog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href="#"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="flex flex-col"
    >
      <div
        className={mergeCn("transform transition-transform duration-300", {
          ["-translate-y-[10px]"]: isHover,
        })}
      >
        <div className="aspect-[4/3] md:aspect-square">
          <NavigationCard
            isHover={isHover}
            imageUrl={blog.image}
            className="h-full mb-[10px]"
            classNames={(isHover) => ({
              image: mergeCn("transform transition-transform duration-300", {
                ["scale-105"]: isHover,
              }),
            })}
          >
            <Badge
              variant="fill"
              className={mergeCn("text-base text-black !py-[4px] border-none")}
              color={blog.tag.bg}
            >
              {blog.tag.label}
            </Badge>
          </NavigationCard>

          <h1 className="text-[24px] lg:text-[36px] font-medium tracking-tighter md:max-w-[75%]">
            {blog.title}
          </h1>
          <div className="text-base mt-[15px] lg:mt-[20px] max-w-[450px] lg:text-[20px] font-light tracking-normal md:max-w-[75%]">
            {blog.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
