/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vtpXgXnOPuu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { db } from "~/server/db";
import LicensePlate from "./license-plate";
import PaginationControls from "~/utils/pagination-controls";

interface LicensePlatePostProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function LicensePlatePost(props: LicensePlatePostProps) {
  const allPosts = await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  });

  const page = props.searchParams.page ?? "1";
  const per_page = props.searchParams.per_page ?? "3";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = allPosts.slice(start, end);

  return (
    <>
      <div className="flex flex-col items-center">
        {entries.map(
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
            </>
          ),
        )}
        <PaginationControls
          hasNextPage={end < allPosts.length}
          hasPrevPage={start > 0}
          allPostsLength={allPosts.length}
        />
      </div>
    </>
  );
}
