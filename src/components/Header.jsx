import Link from 'next/link';
export default function Header() {
  return (
    <header className="flex gap-5 bg-slate-400">
      <h1>Welcome to the page</h1>
      <nav className="text-white flex">
          <ul className="flex gap-2 ">
            <li>
              <Link href={"/"} prefetch={false}>Home</Link>
            </li>
            <li>
              <Link href={"/henry"} prefetch={false}>Henry</Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}