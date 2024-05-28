import { mockData } from "~/server/db/mock-data";

export default function HomePage() {
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
          <form className="flex justify-center">
            <input
              type="text"
              placeholder="Plaka numarası girin"
              className="rounded-l border border-gray-400 p-2"
            />
            <button className="rounded-r bg-blue-500 p-2 text-white">
              Sorgula
            </button>
          </form>

          <ul className="mx-auto grid w-fit grid-cols-2 gap-x-40 gap-y-5 pt-5">
            {mockData.map((post) => (
              <li key={post.id} className="border-b border-black">
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
