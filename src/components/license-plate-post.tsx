/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vtpXgXnOPuu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { db } from "~/server/db";
import LicensePlate from "./license-plate";

export default async function LicensePlatePost() {
  const allPosts = await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  });

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
            <LicensePlate key={post.id} post={post} />
            <br />
            <br />
          </>
        ),
      )}
    </>
  );
}
