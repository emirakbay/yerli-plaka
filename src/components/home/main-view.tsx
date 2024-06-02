import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import LicensePlateInput from "../license-plate-input";
import LicensePlatePost from "../license-plate-post";

export default async function MainView() {
  return (
    <div className="h-full w-full border-x border-slate-400 md:max-w-3xl">
      <div>
        <h1 className="pt-2 text-center text-3xl font-bold">Yerli Plaka</h1>
        <p className="text-center text-sm text-gray-500">
          Yerli plaka numarası sorgulama
        </p>
        <Tabs defaultValue="music" className="pt-5">
          <div className="space-between flex items-center">
            <TabsList className="mx-auto w-fit">
              <TabsTrigger value="more">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="feed" className="relative">
                Feed
              </TabsTrigger>
              <TabsTrigger value="entry">Entry</TabsTrigger>
              <TabsTrigger value="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="feed" className="border-none p-0 outline-none">
            <LicensePlatePost />
          </TabsContent>
          <TabsContent
            value="entry"
            className="h-full flex-col border-none p-0 data-[state=active]:flex"
          >
            <LicensePlateInput />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
