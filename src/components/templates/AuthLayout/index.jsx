import Link from "next/link";
import React from "react";

function AuthLayout({ title, desc, children, type }) {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r p-1 shadow-xl bg-aigen">
        <div className="w-full max-w-xs border rounded-lg bg-white p-8">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate">{desc}</p>
          {children}
          {/* cara pertama */}
          {type === "register" ? (
            <p className="text-sm text-center mt-2">
              Dont have an acconunt?{" "}
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="/register"
              ></Link>
            </p>
          ) : (
            <p className="text-sm text-center mt-2">
              Alredy nhave an acconunt?{" "}
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="/login"
              ></Link>
            </p>
          )}
          {/* cara kedua */}
          <p
            className={`text-sm mt-5 text-center ${
              type === "login" ? "text-red-500" : ""
            }`}
          >
            {type === "register"
              ? "  Alredy nhave an acconunt? "
              : "Dont have an acconunt?"}
            {type === "register" && (
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="/register"
              ></Link>
            )}
            {type === "login" && (
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="/login"
              ></Link>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
//  conditional rendering Tenik untuk menampilkan elemen ui berdasarkan tertentu
