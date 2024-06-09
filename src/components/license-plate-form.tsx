"use client";
import { Label } from "@radix-ui/react-label";
import React from "react";
import LicensePlateSubmit from "./license-plate-form-submit";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface LicensePlateFormProps {
  action: string | ((formData: FormData) => void) | undefined;
}

export default function LicensePlateForm(props: LicensePlateFormProps) {
  const formRef = React.useRef<HTMLFormElement>(null);
  return (
    <>
      <form action={props.action} ref={formRef}>
        <Card className="mx-auto w-max">
          <CardContent className="grid gap-6 pt-2">
            <div className="border-slate mx-auto flex w-fit rounded-e-md rounded-s-md border-4 border-black text-black max-sm:pr-1 lg:max-w-fit">
              <div className="flex items-center justify-center bg-[#2B5BAA] p-2 text-white">
                <span className="self-end text-4xl font-bold max-sm:pt-6 max-sm:text-sm">
                  TR
                </span>
              </div>
              <div className="center relative flex w-[275px] flex-grow items-center justify-center bg-white">
                <div className="flex flex-row font-bold">
                  <Input
                    required
                    id="license-plate"
                    placeholder="99 X 9999"
                    pattern="^(0[1-9]|[1-7][0-9]|8[0-1])(([A-PR-VYZ]{1})(?!0{4,5}$)\d{4,5}|([A-PR-VYZ]{2})(?!0{3,4}$)\d{3,4}|([A-PR-VYZ]{3})(?!0{2,3}$)\d{2,3})$"
                    className="w-[250px] pl-2 text-center text-4xl"
                    name="license-plate"
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">İsim</Label>
              <Input
                id="name"
                placeholder="İsim giriniz."
                name="name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Açıklama</Label>
              <Textarea
                required
                name="description"
                id="description"
                placeholder="Lütfen araç hakkında bilgi veriniz."
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="justify-end space-x-2">
            <Button variant="ghost" type="reset">
              Temizle
            </Button>
            <LicensePlateSubmit />
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
