"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* {!pathname === "/" && ( */}
      <nav className="bg-white shadow py-1 w-full flex flex-wrap items-center justify-between mx-auto mb-1">
        <Link href={"/home"} className="flex items-center">
          <img
            src="https://wiki.iitmandi.co.in/images/0/04/Gymkhanad-01-removebg-preview.png"
            className="h-16 mr-3 aspect-video object-contain"
            alt="Gymkhana Logo"
          />
        </Link>
      </nav>
      {/* )} */}
    </>
  );
};

export default Navbar;
