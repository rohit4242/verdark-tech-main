"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@/lib/utils";
import { MainNavItem } from "@/types";
import { AlignJustify, HomeIcon, SidebarCloseIcon, X } from "lucide-react";
import { MobileNav } from "./MobileNav";
import Image from "next/image";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", closeMobileMenuOnClickOutside);

    return () => {
      document.removeEventListener("click", closeMobileMenuOnClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <div className="flex gap-6 md:gap-10 w-full justify-between items-center">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-urban text-xl font-bold sm:inline-block w-32">
          <Image
            src={"/assets/vedark-logo.png"}
            className="w-full"
            width={100}
            height={100}
            alt={"logo"}
          />
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors text-neutral-400 hover:text-white sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-white"
                  : "text-neutral-400",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="md:hidden w-8">
          <button onClick={toggleMobileMenu}>
            {showMobileMenu ? <X /> : <AlignJustify />}
          </button>
        </div>
        <div className="md:hidden font-urban text-xl font-bold sm:inline-block w-10">
          <Image src={"/assets/icon.png"} width={80} height={80} alt={"logo"} />
        </div>
      </div>

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}