import { db } from "@/db";
import { ISearchParamsProps } from "@/types";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

const Page = async ({ searchParams }: ISearchParamsProps) => {
  const id = searchParams.id;
  if (!id || typeof id !== "string") notFound();

  const configuration = await db.configuration.findUnique({ where: { id } });
  if (!configuration) notFound();

  const { imageUrl, height, width } = configuration;

  return (
    <DesignConfigurator
      configId={configuration?.id}
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
    />
  );
};

export default Page;
