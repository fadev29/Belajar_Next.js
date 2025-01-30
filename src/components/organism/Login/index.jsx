import Button from "@/components/atoms/Button/Button";
import InputFrom from "@/components/molecules/InputFrom";
import { login } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [errorLogin, setErorLogin] = useState();
  const router = useRouter();
  // untuk simulasi login
  async function handleLogin(event) {
    // event.preventDefault(); : buat mencegah halaman refres
    event.preventDefault();

    const paylod = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    try {
      const res = await login(paylod);
      if (res.status) {
        localStorage.setItem("token", res.token);
        router.push("/products");
      } else {
        console.log("login error", res.error.response.data);
        setErorLogin(res.error.response.data);
      }
    } catch (error) {
      console.log("login falied", error);
      setErorLogin(error.response.data);
    }
  }
  return (
    <form onSubmit={handleLogin}>
      <InputFrom label="Username" name="username" type="text" placeholder="masukan username" />
      <InputFrom label="Password" name="password" type="password" placeholder="masukan password" />
      <Button buttonclassname={" h-full"}>Login</Button>
      {errorLogin && <p className="mt-4 text-center text-sm text-red-500 ">{errorLogin}</p>}
    </form>
  );
};

export default Login;
