"use client";

import React from "react";
import useAuth from "../../lib/hooks/useAuth";
import { useAppSelector } from "../../lib/hooks/redux";
import { selectAuth } from "../../lib/features/auth/authSlice";

export default function LoginPage() {
  const { signInWithGoogle } = useAuth();

  // Read the auth state
  const { state } = useAppSelector(selectAuth);

  return (
    <div>
      <h1>Login with google</h1>
      <button
        className="w-fit h-8 bg-yellow-300"
        onClick={() => signInWithGoogle()}
      >
        Login With Google
      </button>
      <h1 className="font-bold text-xl">State: </h1>
      <span>{state}</span>
    </div>
  );
}
