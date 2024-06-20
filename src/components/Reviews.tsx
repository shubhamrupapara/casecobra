"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { phonesImageArr } from "../../constants";
import { splitArray } from "../../helper/SplitArray";

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(phonesImageArr, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    ></div>
  );
}

const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt="What people are buying"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviews;
