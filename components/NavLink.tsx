'use client';

import Link from "next/link";
import { NavLinkProps } from "@/types";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={isActive ? "text-orange-400 border-b-2 border-orange-400" : "text-gray-700 hover:text-orange-400"}>
      <Link href={href}>{children}</Link>
    </li>
  );
}