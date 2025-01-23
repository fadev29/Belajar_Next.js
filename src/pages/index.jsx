import Login from "@/components/organism/Login";
import Image from "next/image";
import LoginPage from "./login";
import ProductPage from "./products";
export default function Home() {
  //  angap data
  const data = {
    text: "klik aku",
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-3">
        {/* <LoginPage /> */}
        <ProductPage />
      </div>
    </>
  );
}
