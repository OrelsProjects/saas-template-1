"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../lib/hooks/redux";
import { useSession } from "next-auth/react";
import { setUser } from "../../lib/features/auth/authSlice";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const { data, status } = useSession();

  useEffect(() => {
    switch (status) {
      case "authenticated":
        dispatch(setUser({ user: { name: "orel" }, state: "authenticated" }));
      case "loading":
        break;
      case "unauthenticated":
        dispatch(setUser(null));
      default:
        break;
    }
  });

  if (status === "loading") {
    return <div>loading...</div>;
  }
  return children;
}
