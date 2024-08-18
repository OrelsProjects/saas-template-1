import { signIn } from "next-auth/react";

const useAuth = () => {
  const signInWithGoogle = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000/login" });
  };

  return { signInWithGoogle };
};

export default useAuth;
