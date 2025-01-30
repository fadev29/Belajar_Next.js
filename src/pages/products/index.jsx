import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import CardProduct from "@/components/molecules/CardProduct";
import { FaArrowCircleUp } from "react-icons/fa";
import React, { use, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getProducts } from "@/services/products";
import { getCurrentUser } from "@/services/auth";
import { useRouter } from "next/router";
import { useLogin } from "@/hooks/useLogin";
import { formatCurrency } from "@/helpers/util/formatCurrency";
import { revalidatePath } from "next/cache";

// angap data dari api/backend

function ProductPage({ data }) {
  // sebutan variabel di react
  const username = useLogin();
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0); // ssr udah engak perlu ini
  const footerRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);

  /**
   * useRef : hooks untuk membuat referensi ke elemen DOM/fungsi untuk mengakses elemen dom
   */

  // const [data, setData] = useState([]);
  const router = useRouter();

  //  untuk nanganin side effect/efect dari perubahan suatu data
  useEffect(() => {
    // ambil data dari localStorage lalu pasing , tambahin logic || [] biar ge error ketika data localstorage kosong
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []); // dependensi array: kalau kosong buat mastiin useEffect dijalani cuma sekali setiap kali halaman diload
  // kalo ada state di dalam dependensi array maka funsi untuk memantau perubahan di state tsb

  // event handler untuk menjalankan fungsi logout dan menghapus data username
  function handlerLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    router.push("/login");
  }
  // useMemo : hooks buat menyimpan hasil komputasi(perhitungan) yang kompleks ke dalam cache,tujuannya biar funsi tsb ga perlu di jalani
  // -n/dihitung ulang ketika tidak ada perubahan useMemo enggak perlu useState
  // const cartTotal = useMemo(() => {
  //   return cart.reduce((total, item) => {
  //     const product = data.find((product) => product.id === item.id);
  //     return total + product.price * item.qty;
  //   }, 0);
  // }, [cart]);

  // useCallback : hooks buat menyimpan fungsi ke dalam cache,tujuannya biar funsi tsb ga perlu di jalani
  // -n/dihitung ulang ketika tidak ada perubahan
  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const product = data?.find((product) => product.id === item.id);
      return total + product?.price * item.qty;
    }, 0);
  }, [cart]); // dependency array

  // panggilan funsi callback buat daperin nilai total
  const cartTotal = calculateTotal();
  useEffect(() => {
    if (cart.length > 0) {
      // const sumTotal = cart.reduce((total, item) => {
      //   const product = data.find((product) => product.id === item.id);
      //   return total + product.price * item.qty;
      // }, 0);
      // setTotal(sumTotal);
      // simpen data ke local stroge
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  // fungsi untuk menambahkan produk ke cart
  const handleAddToCart = (id) => {
    // logic untuk mengecek kalo produk dengan id yang sama di tambahkan lebih 1 maka akan menambahkan jumlah qty
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
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
        <Button buttonClassname={"bg-red-500 hover:bg-red-700"} onClick={handlerLogout}>
          Logout
        </Button>
      </div>
      <div className="flex px-5 py-8">
        {/* products */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500 uppercase mb-4">Products</h1>
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer price={item.price} handleAddToCart={handleAddToCart} id={item.id} />
              </CardProduct>
            ))}
          </div>
        </div>

        {/* cart */}
        {cart.length > 0 && (
          <div className="w-full">
            <h1 className="text-3xl font-bold text-blue-500 mb-4 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <div className="lg:flex p-4 border rounded-lg" key={item.id}>
                    <Image
                      className="rounded object-contain"
                      width={100}
                      height={100}
                      src={datas?.image}
                      alt="cart image"
                    />
                    <div className="flex justify-between w-full">
                      <div className="flex flex-col justify-between ml-3">
                        <span className="font-bold text-xl">{datas?.title}</span>
                        <span className="font-semibold">{formatCurrency(datas?.price)}</span>
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
              <span>{formatCurrency(cartTotal)}</span>
            </div>
          </div>
        )}
      </div>
      {/* footer */}
      {showBackToTop && (
        <div onClick={handleBackToTop} className="fixed bottom-20 right-5 bg-aigen p-2 rounded-full">
          <FaArrowCircleUp className="text-white size-7" />
        </div>
      )}

      <footer ref={footerRef} className="text-center p-5 bg-black text-white w-full">
        All right reserved &copy; || by Fachri
      </footer>
    </>
  );
}
/**
 *
 * ISR (inceremental static generation) : teknik menggabungkan ssr dan ssg
 * dimana halaman akan ditampilkan secara statis namun datanya bisa diupdate secara dinamis
 * jika da perubahan
 */
export async function getStaticProps() {
  //  cara pertama pemanggilan service satu persatu
  try {
    // cara pertama untuk memanggil service satu persatu
    const products = await getProducts();
    // cara kedua kalo mau manggil beberapa service sekaligus pake promise

    const sliceProduct = products.slice(0, 8);
    return {
      props: {
        data: sliceProduct || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
  }
}

export default ProductPage;
