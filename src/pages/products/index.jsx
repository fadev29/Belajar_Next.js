import Button from "@/components/atoms/Button/Button";
import CardProduct from "@/components/molecules/CardProduct";
import React, { use, useEffect, useState } from "react";

// angap data dari api/backend

const data = [
  {
    id: 1,
    image: "/images/html.png",
    title: "Html",
    description: "Lorem asdfghnjmwertyujksdfghjk,asdfghjcvbn",
    price: 1234567890,
  },
  {
    id: 2,
    image: "/images/javascript.png",
    title: "javascript",
    description: "Lorem asdfghnjmwertyujksdfghjk,asdfghjcvbn",
    price: 1234567890,
  },
];

function ProductPage() {
  // sebutan variabel di react
  const [username, setUsername] = useState("");
  //  untuk nanganin side effect/efect dari perubahan suatu data
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
  }, []);

  // event handler untuk menjalankan fungsi logout dan menghapus data username
  function handlerLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl "> HI, {username}</h1>
        <Button
          buttonClassname={"bg-red-500 hover:bg-red-700"}
          onClick={handlerLogout}
        >
          Logout
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-screen gap-2">
        {/* nested components */}
        <CardProduct>
          <CardProduct.Header image="/images/css.png" />
          <CardProduct.Body
            title={"css"}
            desc={"lorem, ipsum dolor sit amet consectur najjajajajajaj"}
          />
          <CardProduct.Footer price={"2000"} />
        </CardProduct>
        {/* rendering data */}
        {/* rendering list teknik untuk nampilin berapa elemen ui tertentu berdasarkan data JSON */}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.title} desc={item.description} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
}

export default ProductPage;
