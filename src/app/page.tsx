import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function HomePage() {
  const allPosts = await db.query.posts.findMany({});

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
    <main className="flex h-screen justify-center bg-gradient-to-br from-neutral-200 via-sky-100 to-gray-100">
      <div className="h-full w-full border-x border-slate-400 md:max-w-2xl">
        <div>
          <h1 className="pt-2 text-center text-3xl font-bold">Yerli Plaka</h1>
          <p className="text-center text-sm text-gray-500">
            Yerli plaka numarası sorgulama
          </p>
        </div>
        <div className="pt-10">
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
            <button
              className="rounded-r bg-blue-500 p-2 text-white"
              type="submit"
            ></button>
          </form>

          <ul className="mx-auto grid w-fit grid-cols-2 gap-x-40 gap-y-5 pt-5">
            {allPosts.map((post) => (
              <li key={post.id} className="rounded border border-gray-300 p-2">
                <h2 className="text-xl font-bold">{post.name}</h2>
                <p>{post.licensePlate}</p>
                <p>{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
