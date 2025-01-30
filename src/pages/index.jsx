import Login from "@/components/organism/Login";
import Image from "next/image";
import LoginPage from "./login";
import ProductPage from "./products";
import { useEffect, useState } from "react";
import { useLogin } from "@/hooks/useLogin";
export default function Home() {
  // anggap state ini menyimpan data yang dikirim api
  const [data, setData] = useState(true);
  const [isMobile, setIsMobile] = useState({
    width: 0,
    height: 0,
    mobile: false,
  });
  const username = useLogin();
  /**
   * useState : hooks react untuk membuat state ke functional component
   * State : variabel untuk menyimpan data
   * data : state yang menyimpan nnilai awal data
   * setData: fungsi untuk memperbarui data
   * true : (boolean) tipedata untukmnilai awal state
   * ketika detData dipanggil dengan nilai baru, react akan merender ulang componet dengan nilai state yang baru
   */

  //  fungsi untuk memperbarui state
  const handleCange = () => {
    // mengubah data nya
    // setData(false);
    // fungsi yang akan mengubah nilai boolean dari true ke false lalu dari false ke true dan seterus nya
    setData((prevState) => !prevState);
  };
  useEffect(() => {
    //  mouting
    setIsMobile({
      width: window.innerWidth,
      height: window.innerHeight,
      mobile: false,
    });
    // updating
    window.addEventListener("resize", (event) => {
      setIsMobile({
        width: event.target.innerWidth,
        height: event.target.innerHeight,
        mobile: window.innerWidth < 450 ? true : false,
      });
    });
    // umouting
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  console.log(isMobile.width);
  console.log(isMobile.height);

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
        {isMobile ? <p className="text-red-600">ini ukuran mobile</p> : <p className="text-red-600"></p>}
        <button onClick={handleCange} className="mt-4 p-4 bg-blue-500  text-white font-bold rounded">
          change
        </button>
        <p className="text-black text-5xl text-center">{username}</p>
      </div>
    </>
  );
}
