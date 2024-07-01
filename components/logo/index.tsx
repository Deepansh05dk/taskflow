import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={"/logo.svg"} height={30} width={30} alt="logo" />
        <p className="text-lg text-neutral-700 pb-1">TaskFlow</p>
      </div>
    </Link>
  );
};

export default Logo;
