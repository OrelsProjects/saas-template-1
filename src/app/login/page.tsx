"use client";

import React from "react";
import useAuth from "../../lib/hooks/useAuth";

export default function LoginPage() {
  const { signInWithGoogle } = useAuth();

  return (
    <div>
      <h1>Login with google</h1>
      <button
        className="w-fit h-8 bg-yellow-300"
        onClick={() => signInWithGoogle()}
      >
        Login With Google
      </button>
    </div>
  );
}
