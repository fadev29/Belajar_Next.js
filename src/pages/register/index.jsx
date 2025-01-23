import React from "react";
import Register from "@/components/organism/Register";
import AuthLayout from "@/components/templates/AuthLayout";
function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AuthLayout
        title={"Register"}
        desc="Hi, plase login to your acconunt"
        type="register"
      >
        <Register />
      </AuthLayout>
    </div>
  );
}

export default RegisterPage;
