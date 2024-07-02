import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) notFound();

  const orders = await db.order.findMany({
    where: {
      isPaid: true,
      // Get orders created in the last 7 days (gte: greater than or equal to)
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    orderBy: { createdAt: "desc" },
    include: { user: true, shippingAddress: true },
  });

  const lastWeekSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    _sum: { amount: true },
  });

  return <div className="flex min-h-screen w-full bg-muted/40">Dashboard</div>;
};

export default Page;
