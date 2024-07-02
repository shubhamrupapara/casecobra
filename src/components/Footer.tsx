import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { footerItemsArr } from "../app/constants";
import { IFooterItemsProps } from "@/types";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              {footerItemsArr?.map(
                (footerItems: IFooterItemsProps, index: number) => (
                  <Link
                    key={index}
                    href={footerItems?.href}
                    className="text-sm text-muted-foreground hover:text-gray-600"
                  >
                    {footerItems?.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
