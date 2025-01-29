import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import CardProduct from "@/components/molecules/CardProduct";
import { FaArrowCircleUp } from "react-icons/fa";
import { data } from "@/constant/products";
import React, { use, useEffect, useRef, useState } from "react";

// angap data dari api/backend

function ProductPage() {
  // sebutan variabel di react
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const footerRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);
  /**
   * useRef : hooks untuk membuat referensi ke elemen DOM/fungsi untuk mengakses elemen dom
   */
  //  untuk nanganin side effect/efect dari perubahan suatu data
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
    // ambil data dari localStorage lalu pasing , tambahin logic || [] biar ge error ketika data localstorage kosong
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []); // dependensi array: kalau kosong buat mastiin useEffect dijalani cuma sekali setiap kali halaman diload
  // kalo ada state di dalam dependensi array maka funsi untuk memantau perubahan di state tsb

  // event handler untuk menjalankan fungsi logout dan menghapus data username
  function handlerLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  }
  useEffect(() => {
    if (cart.length > 0) {
      const sumTotal = cart.reduce((total, item) => {
        const product = data.find((product) => product.id === item.id);
        return total + product.price * item.qty;
      }, 0);
      setTotal(sumTotal);
      // simpen data ke local stroge
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  // fungsi untuk menambahkan produk ke cart
  const handleAddToCart = (id) => {
    // logic untuk mengecek kalo produk dengan id yang sama di tambahkan lebih 1 maka akan menambahkan jumlah qty
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
      // kalo fungsi cuma sekali ditrigger maka cuma satu produk doang ke cart
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  useEffect(() => {
    function handleScroll() {
      //  ambil nilai offsetTop(posisi vertical) dari elemen footer yang direferensikan oleh footerRef
      const footerTop = footerRef.current.offsetTop;

      // ambil tinggi innerHeight dari object window (tinggi viewport tanpa toolbar & scrollbar)
      const viewportHeight = window.innerHeight;

      // ambil nilai scrolly dari object window(posisi scroll vertical (sumbu y) dilayar)
      const scrollPosition = window.scrollY;

      // logic untuk mengecek apakah posissi scroll di layar telah mencapai elemen footer
      if (scrollPosition + viewportHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
    //  event listener buat jalanin fungsi handlerscroll setiap evet scroll terjadi
    window.addEventListener("scroll", handleScroll);

    // unmout
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]); // di jalani  effect  ini tiap kali nilai footerRef berubah

  function handleBackToTop() {
    // scroll keatas dengan smooth
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button
          buttonClassname={"bg-red-500 hover:bg-red-700"}
          onClick={handlerLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex px-5 py-8">
        {/* products */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500 uppercase mb-4">
            Products
          </h1>
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer
                  price={item.price}
                  handleAddToCart={handleAddToCart}
                  id={item.id}
                />
              </CardProduct>
            ))}
          </div>
        </div>

        {/* cart */}
        {cart.length > 0 && (
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-500 mb-4 uppercase">
              Cart
            </h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <div className="flex p-4 border rounded-lg" key={item.id}>
                    <Image
                      className="rounded"
                      width={100}
                      height={100}
                      src={datas.image}
                      alt="cart image"
                    />
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between ml-3">
                        <span className="font-bold text-xl">{datas.title}</span>
                        <span className="font-semibold">{datas.price}</span>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <span className="mb-1">Qty</span>
                        <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                          {item.qty}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2 font-semibold rounded-lg">
              <span>Total</span>
              <span>{total}</span>
            </div>
          </div>
        )}
      </div>
      {/* footer */}
      {showBackToTop && (
        <div
          onClick={handleBackToTop}
          className="fixed bottom-20 right-5 bg-green-400 p-2 rounded-full"
        >
          <FaArrowCircleUp className="text-white size-7" />
        </div>
      )}

      <footer
        ref={footerRef}
        className="text-center p-5 bg-black text-white w-full"
      >
        All right reserved &copy; || by Fachri
      </footer>
    </>
  );
}

export default ProductPage;
