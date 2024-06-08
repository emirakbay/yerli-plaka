import React from "react";

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
      <div className="mx-auto flex w-fit flex-col rounded-md bg-slate-500 p-2 text-white">
        <span className="mr-auto self-end text-2xl font-bold max-sm:pt-6 max-sm:text-sm">
          {"İsim : "}
          {props.post.name}
        </span>
        <span className="mr-auto self-end text-2xl font-bold max-sm:pt-6 max-sm:text-sm">
          {"Açıklama : "}
          {props.post.description}
        </span>
        <span className="mr-auto self-end text-2xl font-bold max-sm:pt-6 max-sm:text-sm">
          {props.post.createdAt.toLocaleTimeString()}
        </span>
        <div />
      </div>
    </>
  );
}
