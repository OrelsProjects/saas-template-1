import { signIn } from "next-auth/react";

const useAuth = () => {
  const signInWithGoogle = async () => {
    await signIn("google");
  };

  return { signInWithGoogle };
};

export default useAuth;
