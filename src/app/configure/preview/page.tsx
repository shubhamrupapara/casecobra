import { db } from "@/db";
import { ISearchParamsProps } from "@/types";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";

const Page = async ({ searchParams }: ISearchParamsProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") notFound();

  const configuration = await db.configuration.findUnique({ where: { id } });
  if (!configuration) notFound();

  return <DesignPreview configuration={configuration} />;
};

export default Page;
