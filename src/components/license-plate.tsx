import React from "react";
import { cn } from "~/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function LicensePlate(props: {
  post: {
    id: number;
    licensePlate: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date;
    updatedAt: Date | null;
  };
}) {
  return (
    <>
      <Card className={cn("w-fit bg-slate-200")} {...props}>
        <CardHeader>
          <div
            key={props.post.id}
            className="border-slate mx-auto flex w-fit rounded-e-md rounded-s-md border-4 border-black text-black max-sm:pr-1 lg:max-w-fit"
          >
            <div className="flex items-center justify-center bg-[#2B5BAA] p-2 text-white">
              <span className="self-end text-4xl font-bold max-sm:pt-6 max-sm:text-sm">
                TR
              </span>
            </div>
            <div className="center relative flex flex-grow items-center justify-center bg-white pb-2">
              <span className="text-nowrap text-7xl font-bold max-sm:text-6xl">
                {props.post.licensePlate}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1 text-center">
              <p className="text-lg font-medium leading-none">
                {"İsim : "}{props.post.name}
              </p>
              <p className="text-lg font-medium leading-none">
                {"Açıklama : "}{props.post.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
