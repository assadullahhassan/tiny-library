'use client';

import NavLink from "@/app/components/NavLink";
import Link from "next/link";
import TLLogo from "@/public/images/tinylibrary-logo.png";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
       <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4 pr-2">
        <Link href="/">
          <div className="relative cursor-pointer">
            <img
              src={TLLogo.src}
              alt="Tiny Library Logo"
              className="w-[200px] h-auto hidden md:block"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-1.5">
          <NavLink href="/books" >Books</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </header>
    );
}