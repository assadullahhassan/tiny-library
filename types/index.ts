import type { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode;
}

export type NavLinkProps = {
  href: string;
  children: ReactNode;
};

