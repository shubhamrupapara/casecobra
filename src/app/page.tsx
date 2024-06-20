/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { reviewsArr } from "../../constants";
import { IReviewProps } from "@/types";

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a&nbsp;
                <span className="bg-green-600 px-2 text-white">custom</span>
                &nbsp;Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favoutite memories with your own,&nbsp;
                <span className="font-semibold">one-of-one</span>&nbsp;Phone
                Case.&nbsp;CaseCobra allows you to protect your memories, not
                just your phone case.
              </p>
              {/* qualities */}
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                {[
                  "High Quality Durable Material",
                  "5 Year Print Guarantee",
                  "Modern iPhone Models Supported",
                ]?.map((item: string, index: number) => (
                  <div key={index} className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-green-600" />
                      <p>{item}</p>
                    </li>
                  </div>
                ))}
              </ul>
              {/* happy customers */}
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  {[
                    "user-1.png",
                    "user-2.png",
                    "user-3.png",
                    "user-4.jpg",
                    "user-5.jpg",
                  ]?.map((imageName: string, index: number) => (
                    <Image
                      key={index}
                      src={`/users/${imageName}`}
                      alt="user-image"
                      className={`inline-block rounded-full ring-2 ring-slate-100 ${
                        index === 4 && "object-cover"
                      }`}
                      height={40}
                      width={40}
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index: number) => (
                      <Star
                        key={index}
                        className="h-4 w-4 text-green-600 fill-green-600"
                      />
                    ))}
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* phone image with dog */}
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* value proposition section */}
      <section className="bg-slate-100 grainy-dark py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our&nbsp;
              <span className="relative px-2">
                customers&nbsp;
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>
              &nbsp; say
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>
          {/* customers reviews */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {reviewsArr?.map((review: IReviewProps, index: number) => (
              <div
                className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
                key={index}
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 text-green-600 fill-green-600"
                    />
                  ))}
                </div>
                <div className="text-lg leading-8">
                  <p>
                    {review.review.split(review.highlightedText)[0]}
                    <span className="p-0.5 bg-slate-800 text-white">
                      {review.highlightedText}
                    </span>
                    {review.review.split(review.highlightedText)[1]}
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img
                    className="rounded-full h-12 w-12 object-cover"
                    src={review.image}
                    alt={review.name}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
        {/* reviews */}
        {/* <div className="pt-16">
          <Reviews />
        </div> */}
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get&nbsp;
                <span className="relative px-2 bg-green-600 text-white">
                  your own case
                </span>
                &nbsp; now
              </h2>
            </div>
          </div>
          {/* horse image in mobile */}
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>
          {/* features */}
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            {[
              "High-quality silicone material",
              "Scratch and fingerprint resistant coating",
              "Wireless charging compatible",

              "print warranty",
            ]?.map((item: string, index: number) => (
              <li key={index} className="w-fit">
                <Check className="h-5 w-5 text-green-600 inline mr-1.5" />
                {item}
              </li>
            ))}
            {/* create your own case now btn */}
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
