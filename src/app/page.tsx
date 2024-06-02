import MainView from "~/components/home/main-view";

export const dynamic = "auto";

export default async function HomePage() {
  return (
    <>
      <main className="flex h-screen justify-center bg-gradient-to-br from-neutral-200 via-sky-100 to-gray-100">
        <MainView />
      </main>
    </>
  );
}
