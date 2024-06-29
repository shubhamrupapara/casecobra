"use server";

import { db } from "@/db";
import { ISaveConfigProps } from "@/types";

export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}: ISaveConfigProps) {
  await db.configuration.update({
    where: { id: configId },
    data: {
      color,
      finish,
      material,
      model,
    },
  });
}
