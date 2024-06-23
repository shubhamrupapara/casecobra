import { HTMLAttributes } from "react";

export interface IMaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

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

export interface IFooterItemsProps {
  label: string;
  href: string;
}
