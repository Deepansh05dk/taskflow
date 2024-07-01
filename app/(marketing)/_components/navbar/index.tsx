import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>
          <div className="flex justify-between md:gap-4 mt-4 md:mt-0">
            <Link href={"/sign-in"}>
              <Button variant={"default"} className="bg-red-600" size={"lg"}>
                Login
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button variant={"outline"} size={"lg"}>
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
