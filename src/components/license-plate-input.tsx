import { revalidatePath } from "next/cache";
import React from "react";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import LicensePlateForm from "./license-plate-form";

export default function LicensePlateInput() {
  async function createPost(formData: FormData) {
    "use server";
    try {
      await db.insert(posts).values({
        name: formData.get("name") as string,
        licensePlate: formData.get("license-plate") as string,
        description: formData.get("description") as string,
      });
      revalidatePath("/");
    } catch (error) {
      console.error("Failed to create post", error);
    }
  }

  return (
    <>
      <LicensePlateForm action={createPost} />
    </>
  );
}
