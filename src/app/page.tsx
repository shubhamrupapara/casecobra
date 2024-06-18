import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <Image
                  src="/snake-1.png"
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                  className="w-full"
                />
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
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* images */}
                <div className="flex -space-x-4">
                  {[
                    "user-1.png",
                    "user-2.png",
                    "user-3.png",
                    "user-4.jpg",
                    "user-5.jpg",
                  ]?.map((imageName: any, index: number) => (
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
                {/* stars */}
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
                    <span className="font-semibold">1,250</span>&nbsp;Happy
                    Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="your-image"
                layout="fill"
                objectFit="contain"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <Image
                src="/line.png"
                alt="line"
                layout="fill"
                objectFit="contain"
                className="absolute w-20 -left-6 bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
