// export const dynamic = "force-dynamic";
// export const dynamic = "force-static";
import { getAll, getAllByType } from '@/lib/apiNew';
import Link from 'next/link';

export const metadata = {
  title: 'Frontpage',
  description: 'Description'
}

export default async function Home() {
  const data = await getAll();
  console.log(data);

  return (
    <main className="bg-slate-100">
    <h1>Hello world</h1>
    <p>{data}</p>
    {/* <img src={data.message} alt={data.status} ></img> */}
    </main>
  );
}
