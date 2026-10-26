import NavLink from "@/components/NavLink";
import Link from "next/link";
import TLLogo from "@/public/images/tinylibrary-logo.png";
import Image from 'next/image'


export default function NavBar() {

    return (
      <header className="w-full bg-white">
      <nav className="flex justify-between px-6 pr-2">
        <Link href="/">
          <div className="py-3 relative cursor-pointer">
            <Image
              src={TLLogo}
              alt="Tiny Library Logo"
              width={90}
              height={90}
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5 mx-4">
          <NavLink href="/books" >Books</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </header>
    );
}