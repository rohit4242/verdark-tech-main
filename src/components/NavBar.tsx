"use client";

import { MainNavItem } from "../types";
import useScroll from "@/hooks/use-scroll";
import { MainNav } from "./MainNav";

interface NavBarProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
}

export function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50);
  // const signInModal = useSigninModal();

  return (
    <header
      className={`sticky top-0 z-40 flex text-white w-full justify-center bg-neutral-950 backdrop-blur-xl transition-all border-slate-600 ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-center py-4">
        <MainNav items={items}>{children}</MainNav>

        {/* <div className="flex items-center space-x-3">{rightElements}</div> */}
      </div>
    </header>
  );
}
