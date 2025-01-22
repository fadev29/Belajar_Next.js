import Button from "@/components/atoms/Button/Button";
import InputFrom from "@/components/molecules/InputFrom";
import Link from "next/link";
import React from "react";

function Register() {
  return (
    <form>
      <InputFrom
        label="Username"
        name="username"
        type="text"
        placeholder="masukan username"
      />
      <InputFrom
        label="Email"
        name="email"
        type="email"
        placeholder="masukan email"
      />
      <InputFrom
        label="Password"
        name="password"
        type="password"
        placeholder="masukan password"
      />
      <Button buttonClassname="bg-blue-500 hover:bg-blue-700 text-white">
        Login
      </Button>
      <p className="text-sm text-center mt-2">
        Dont have an acconunt?{" "}
        <Link className="text-blue-500 hover:text-blue-700" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
}

export default Register;
