/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vtpXgXnOPuu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { db } from "~/server/db";

export default async function LicensePlatePost() {
  const allPosts = await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  });

  // "99 X 9999", "99 X 99999"
  // "99 XX 999", "99 XX 9999"
  // "99 XXX 99" veya "99 XXX 999"

  return (
    <>
      {allPosts.map(
        (post: {
          id: number;
          name: string | null;
          licensePlate: string | null;
          description: string | null;
          createdAt: Date;
          updatedAt: Date | null;
        }) => (
          <>
            <div
              key={post.id}
              className="border-slate flex rounded-e-md rounded-s-md border-4 border-black text-black max-sm:pr-1 lg:max-w-[1885px]"
            >
              <div className="flex items-center justify-center bg-[#2B5BAA] p-2 text-white">
                <span className="self-end text-4xl font-bold max-sm:pt-6 max-sm:text-sm">
                  TR
                </span>
              </div>
              <div className="center relative flex flex-grow items-center justify-center bg-white pb-2">
                <span className="text-nowrap text-9xl font-bold max-sm:text-6xl">
                  {post.licensePlate}
                </span>
              </div>
            </div>
            <div className="border-slate flex rounded-e-md rounded-s-md border-4 border-black text-black max-sm:pr-1 lg:max-w-[1885px]">
              <div className="center relative flex flex-grow flex-col items-center justify-center bg-white pb-2">
                <span className="text-nowrap text-3xl font-bold max-sm:text-xl">
                  {"Name:"}
                  {post.name}
                </span>
                <span className="text-nowrap text-3xl font-bold max-sm:text-xl">
                  {"Description: "}
                  {post.description}
                </span>
              </div>
            </div>
          </>
        ),
      )}
    </>
  );
}
