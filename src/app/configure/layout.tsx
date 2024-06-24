import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex flex-col flex-1">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
