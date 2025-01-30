import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/auth";
import { useRouter } from "next/router";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getCurrentUser(token));
    } else {
      router.push("/login");
    }
  }, []);
  return username;
};
