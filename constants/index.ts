import { IReviewProps } from "@/types";

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

export const POSSIBLE_ANIMATION_DELAYS = [
  "0s",
  "0.1s",
  "0.2s",
  "0.3s",
  "0.4s",
  "0.5s",
];
