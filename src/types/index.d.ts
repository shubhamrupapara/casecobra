import { HTMLAttributes } from "react";

export interface IReviewProps {
  name: string;
  image: string;
  review: string;
  highlightedText: string;
  timePeriod: string;
}

export interface IPhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export interface IReviewsProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

export interface IReviewColumnProps {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}
