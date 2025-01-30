import Login from "@/components/organism/Login";
import Image from "next/image";
import LoginPage from "./login";
import ProductPage from "./products";
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import { useSelector } from "react-redux";
export default function Home() {
  // anggap state ini menyimpan data yang dikirim api
  const [data, setData] = useState(true);
  const username = useLogin();
  const { isMobileScreen } = useSelector((state) => state.screen);
  console.log("mobile", isMobileScreen);

  //  fungsi untuk memperbarui state
  const handleCange = () => {
    // mengubah data nya
    // setData(false);
    // fungsi yang akan mengubah nilai boolean dari true ke false lalu dari false ke true dan seterus nya
    setData((prevState) => !prevState);
  };

  /**
   * useEffect : hooks di react buat nambahin side effect ke state
   * useEffect biasanya dipake buat memperbarui data/komponen ketika ada perubahan pada state
   * [] (array kosong/dependency array : jika array kosong maka argumen tersebut untuk menjalankan useEffect sekali,
   * jika ada state di dalam array tsb maka untuk memantau setiap ada perubahan pada state tsb dan menjalan kan useEffect  ketika state berubah)
   */

  return (
    <>
      <div className={`flex flex-col justify-center items-center h-screen gap-3 ${data ? "bg-black" : "bg-white"}`}>
        {data ? (
          <h1 className="text-6xl  font-bold bg-black text-white p-8">Data</h1>
        ) : (
          <h1 className="text-6xl font-bold bg-blue-500 p-8">updated data</h1>
        )}
        {isMobileScreen && <p className="text-red-600">ini ukuran mobile</p>}
        <button onClick={handleCange} className="mt-4 p-4 bg-blue-500  text-white font-bold rounded">
          change
        </button>
        <p className="text-black text-5xl text-center">{username}</p>
      </div>
    </>
  );
}
