import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import { formatPrice } from "@/lib/utils";
import { IGoalsProps } from "@/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import StatusDropdown from "./StatusDropdown";

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

  const lastMonthSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
    _sum: { amount: true },
  });

  const goalsArr: IGoalsProps[] = [
    { title: "Last Week", amount: lastWeekSum._sum.amount, goal: 25000 },
    { title: "Last Month", amount: lastMonthSum._sum.amount, goal: 150000 },
  ];

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-12">
          {/* Weekly and Monthly Goals */}
          <div className="grid gap-4 sm:grid-cols-2">
            {goalsArr.map((goalItems: IGoalsProps, index: number) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardDescription>{goalItems?.title}</CardDescription>
                  <CardTitle className="text-4xl">
                    {formatPrice(goalItems?.amount ?? 0)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    of {formatPrice(goalItems?.goal)} goal
                  </div>
                </CardContent>
                <CardFooter>
                  <Progress
                    value={(goalItems?.amount ?? 0) / goalItems?.goal}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
          {/* Incoming Orders */}
          <h1 className="text-4xl font-bold tracking-tight">Incoming Orders</h1>
          <div className="overflow-x-auto">
            <Table className="min-w-[768px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Purchase date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} className="bg-accent">
                    <TableCell>
                      <div className="font-medium">
                        {order.shippingAddress?.name}
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.user.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      {order.createdAt?.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>
                      <StatusDropdown
                        id={order.id}
                        orderStatus={order.status}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      {formatPrice(order.amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
