import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div className="navbar">
      <div className="navbarHeader">
        <h2 className="navbarTitle">Next Auth</h2>
      </div>

      <div className="navbarContent">
        <Link href="/" className="navbarLinks">
          Home
        </Link>
        <Link href="/about" className="navbarLinks">
          About
        </Link>
        {session && (
          <Link href="/dashboard" className="navbarLinks">
            Dashboard
          </Link>
        )}
        <Link href="/contact" className="navbarLinks">
          Contact
        </Link>
        {!session && (
          <Link
            href="/api/auth/signin"
            className="navbarLinks"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Sign In
          </Link>
        )}
        {session && (
          <Link
            href="/api/auth/signout"
            className="navbarLinks"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Link>
        )}
      </div>
    </div>
  );
}
