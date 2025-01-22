import React from "react";

function AuthLayout({ title, desc, children }) {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-r p-1 shadow-xl bg-aigen">
        <div className="w-full max-w-xs border rounded-lg bg-white p-8">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate">{desc}</p>
          {children}
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
