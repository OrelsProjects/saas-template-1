import { signIn } from "next-auth/react";

const useAuth = () => {
  const signInWithGoogle = async () => {
    await signIn("google", { callbackUrl: "/home" });
  };

  return { signInWithGoogle };
};

export default useAuth;
