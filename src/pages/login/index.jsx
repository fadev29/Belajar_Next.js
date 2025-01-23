import React from "react";
import AuthLayout from "@/components/templates/AuthLayout";
import Login from "@/components/organism/Login";
function LoginPage() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <AuthLayout
          title={"login"}
          desc="Hi, plase login to your acconunt"
          type="login"
        >
          <Login />
        </AuthLayout>
      </div>
    </>
  );
}

export default LoginPage;
