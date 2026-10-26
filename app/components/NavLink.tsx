import Link from "next/link";
import { NavLinkProps } from "@/app/types";

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li className="text-blue-500 hover:text-blue-700">
      <Link href={href}>{children}</Link>
    </li>
  );
}