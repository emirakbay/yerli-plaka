import { revalidatePath } from "next/cache";
import React from "react";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default function LicensePlateInput() {
  async function createPost(
    name: string,
    licensePlate: string,
    description: string,
  ) {
    "use server";
    try {
      await db.insert(posts).values({
        name: name,
        licensePlate: licensePlate,
        description: description,
      });
    } catch (error) {
      console.error("Failed to create post", error);
    }
  }

  return (
    <form
      className="flex justify-center"
      action={async (e: FormData) => {
        "use server";
        await createPost(
          e.get("name") as string,
          e.get("licensePlate") as string,
          e.get("description") as string,
        );
        revalidatePath("/");
      }}
    >
      <input
        className="rounded-l border border-gray-300 p-2"
        name="name"
        placeholder="Name"
        type="text"
      />
      <input
        className="border border-gray-300 p-2"
        name="licensePlate"
        placeholder="License Plate"
        type="text"
      />
      <input
        className="border border-gray-300 p-2"
        name="description"
        placeholder="Description"
        type="text"
      />
      <button className="rounded-r bg-blue-500 p-2 text-white" type="submit">
        submit
      </button>
    </form>
  );
}
