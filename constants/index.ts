import { IFooterItemsProps, IReviewProps, IStepsItemsProps } from "@/types";

export const userImagesArr: string[] = [
  "user-1.png",
  "user-2.png",
  "user-3.png",
  "user-4.jpg",
  "user-5.jpg",
];

export const tagLines1Arr: string[] = [
  "High Quality Durable Material",
  "5 Year Print Guarantee",
  "Modern iPhone Models Supported",
];

export const tagLines2Arr: string[] = [
  "High-quality silicone material",
  "Scratch and fingerprint resistant coating",
  "Wireless charging compatible",
  "print warranty",
];

export const reviewsArr: IReviewProps[] = [
  {
    name: "Jonathan",
    image: "/users/user-1.png",
    review: `The case feels durable and I even got a compliment on the
              design. Had the case for two and a half months now and
              the image is super clear, on the case I had before, the image started fading into
              yellow-ish color after a couple weeks. Love it.`,
    highlightedText: "the image is super clear",
    timePeriod: "two and a half months",
  },
  {
    name: "Josh",
    image: "/users/user-4.jpg",
    review: `I usually keep my phone together with my keys in my pocket
              and that led to some pretty heavy scratchmarks on all of my
              last phone cases. This one, besides a barely noticeable
              scratch on the corner, looks brand new after about half a year.
              I dig it.`,
    highlightedText: "looks brand new after about half a year",
    timePeriod: "about half a year",
  },
];

export const phonesImageArr: string[] = [
  "testimonials/1.jpg",
  "testimonials/2.jpg",
  "testimonials/3.jpg",
  "testimonials/4.jpg",
  "testimonials/5.jpg",
  "testimonials/6.jpg",
];

export const POSSIBLE_ANIMATION_DELAYS: string[] = [
  "0s",
  "0.1s",
  "0.2s",
  "0.3s",
  "0.4s",
  "0.5s",
];

export const footerItemsArr: IFooterItemsProps[] = [
  { label: "Terms", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export const STEPS: IStepsItemsProps[] = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
  },
];

export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 500,
  },
  finish: {
    smooth: 0,
    textured: 300,
  },
} as const;

export const BASE_PRICE = 1400;
