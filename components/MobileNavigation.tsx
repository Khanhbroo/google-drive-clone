"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNavigation = ({ avatar }: { avatar: string }) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="Search"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <div className="header-user">
            <Image
              src={avatar}
              alt="avatar"
              width={44}
              height={44}
              className="header-user-avatar"
            />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
