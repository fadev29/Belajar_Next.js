import CardProduct from "@/components/molecules/CardProduct";
import React from "react";

// angap data dari api/backend

const data = [
  {
    id: 1,
    image: "/images/html.png",
    title: "Html",
    description: "Lorem asdfghnjmwertyujksdfghjk,asdfghjcvbn",
    price: 1234567890,
  },
];

function ProductPage() {
  return (
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
  );
}

export default ProductPage;
