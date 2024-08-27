"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

const Dasboard = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <>
          <Image
            src={session.user?.image as string}
            className="rounded-full h-20 w-20 my-5"
            alt="User image"
            width={50}
            height={50}
          />
          <p>Welcome back, {session.user?.name}</p>
          <p>{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="border-2 bg-slate-400 rounded p-2"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1>You are not logged in!</h1>
          <button
            onClick={() => signIn("google")}
            className="border-2 bg-slate-400 rounded p-2"
          >
            Google Sign In
          </button>
          <button
            onClick={() => signIn("github")}
            className="border-2 bg-slate-400 rounded p-2"
          >
            Github Sign In
          </button>
        </>
      )}
    </>
  );
};

export default Dasboard;
