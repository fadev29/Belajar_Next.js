import Button from "@/components/atoms/Button/Button";
import InputFrom from "@/components/molecules/InputFrom";
import Link from "next/link";
import React from "react";

function Login() {
  // untuk simulasi login
  const handleLogin = (event) => {
    // event.preventDefault(); : buat mencegah halaman refres
    event.preventDefault();

    console.log("klik Login button");
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    // simpen data ke localstorage
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);
    // redirect ke halaman produk
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputFrom
        label="Username"
        name="username"
        type="text"
        placeholder="masukan username"
      />
      <InputFrom
        label="Password"
        name="password"
        type="password"
        placeholder="masukan password"
      />
      <Button buttonclassname="bg-blue-500 hover:bg-blue-700 text-white w-full">
        Login
      </Button>
    </form>
  );
}

export default Login;
