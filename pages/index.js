import Link from "next/link";

export default function Home() {
  return (
    <div className="m-3 flex flex-col gap-3 items-center">
      <Link href={'/csr'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">CSR (Client-Side Rendering)</Link>
      <Link href={'/ssr'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">SSR (Server-Side Rendering)</Link>
      <Link href={'/ssg'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">Static Site Generation (SSG)</Link>
      <Link href={'/isr'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">Incremental Static Regeneration (ISR)</Link>
      <div>
        <h2 className="font-bold">Dynamic Routes (Rotas Dinâmicas)</h2>
        <div className="grid grid-cols-2 gap-3 bg-slate-400 p-3 rounded">
          <Link href={'/posts/1'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">Dynamic Routes (Rotas Dinâmicas) 1</Link>
          <Link href={'/posts/2'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">Dynamic Routes (Rotas Dinâmicas) 2</Link>
          <Link href={'/posts/3'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">Dynamic Routes (Rotas Dinâmicas) 3</Link>
          <Link href={'/posts/4'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">Dynamic Routes (Rotas Dinâmicas) 4</Link>
          <Link href={'/posts/5'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">Dynamic Routes (Rotas Dinâmicas) 5</Link>
        </div>
      </div>
      <Link href={'/api/hello'} className=" bg-blue-600 w-96 text-center text-white p-3 rounded ">API Routes</Link>
    
    </div>
  );
}
