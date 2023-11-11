import React, { useState } from "react";
import Image from "next/image";
import { ArrowButton, Container } from "@/common/components";

const EmailSubscription = () => {
  const [isHoverSubmit, setIsHoverSubmit] = useState(false);

  return (
    <section>
      <Container className="pb-3 flex flex-col md:flex-row gap-[10px]">
        <div className="w-full h-[250px] md:h-auto md:w-[40%] rounded-primary overflow-hidden relative">
          <Image
            alt="Subscription Thumb"
            src="https://colabs.yourcreative.com.au/wp-content/uploads/2023/07/subscribe.jpg"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[60%] bg-[#0046c7] rounded-primary p-[20px] md:p-[30px] text-body">
          <h3 className="font-medium max-w-[600px] mb-5">
            An ecosystem to be part of. Stay in the loop.
          </h3>

          <div className="py-[25px]">
            <input
              className="bg-body rounded-[20px] p-5 focus:outline-none text-black w-full placeholder:font-light mb-[10px]"
              placeholder="Your Email Address"
            />
            <div
              className="cursor-pointer flex items-center justify-end w-fit ml-auto"
              onMouseEnter={() => setIsHoverSubmit(true)}
              onMouseLeave={() => setIsHoverSubmit(false)}
            >
              <p className="font-light mr-5">Subscribe</p>
              <ArrowButton isHovered={isHoverSubmit} />
            </div>
          </div>

          <div className="max-w-[500px] pt-20">
            <p className="font-light">
              Subscribe for updates, news, events, and community resources.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EmailSubscription;
