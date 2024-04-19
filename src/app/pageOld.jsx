// export const dynamic = "force-dynamic";
// export const dynamic = "force-static";
import Link from 'next/link';

export const metadata = {
  title: 'Frontpage',
  description: 'Description'
}

export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <main className="bg-slate-100">
    <h1>Hello world</h1>
    </main>
  );
}
