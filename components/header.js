import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-10 left-[90px] right-[90px] flex justify-between items-center">
      {/* KIRI */}
      <div className="flex items-center">
        {/* LOGO */}
        <Link href="/b">
          <a>
            <img src="/images/logo.svg" className="h-[45px]" />
          </a>
        </Link>

        {/* Links */}
        <nav className="ml-[50px]">
          <ul className="flex space-x-[30px]">
            <li>
              <Link href="/">
                <a className="text-text-200">Featured</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-text-200">How It Work</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-text-200">Pricing</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* KANAN */}
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="px-8 py-3 text-text-200">Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="px-8 py-3 text-white bg-brand rounded-md">Join Us</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
