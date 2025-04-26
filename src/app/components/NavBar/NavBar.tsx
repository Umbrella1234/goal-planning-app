import React from "react";
import Link from "next/link";

const linkClasses = "hover:opacity-80 transition-opacity";

export const NavBar: React.FunctionComponent = () => (
  <nav className="px-4 py-2 flex">
    <Link className={linkClasses} href="/">
      Home
    </Link>
    <div className="ml-auto flex gap-4 ">
      <Link className={linkClasses} href="/todos">
        Todos
      </Link>
      <Link className={linkClasses} href="/goals">
        Goals
      </Link>
    </div>
  </nav>
);
