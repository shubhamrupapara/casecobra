import {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";
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

export interface IStepsItemsProps {
  name: string;
  description: string;
  url: string;
}

export interface ISearchParamsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export interface IDesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
}

export interface ISaveConfigProps {
  color: CaseColor;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
}
