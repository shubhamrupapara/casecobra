import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface IPhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: IPhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone-template"
        className="pointer-events-none z-50 select-none"
        layout="fill"
        objectFit="contain"
      />
      <div className="absolute inset-0 -z-10">
        <Image
          src={imgSrc}
          alt="overlaying-phone-image"
          className="object-cover"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Phone;
