import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//  sebagai wadah : untuk beberapa fungsi anak (header,body,footer)
// komponen ini akan jadi komponent pembungkus children
function CardProduct({ children }) {
  return (
    <>
      <div className="rounded-lg bg-aigen shadow-xl p-1">
        <div className="w-full max-w-xs bg-white rounded-lg">{children}</div>
      </div>
    </>
  );
}

function Header({ image }) {
  return (
    <Link href="#">
      <Image
        src={image}
        alt="card image"
        className="p-4 rounded-t-lg"
        width={300}
        height={300}
      />
    </Link>
  );
}

function Body({ title, desc }) {
  return (
    <div className="px-5 pb-5">
      <Link href="#">
        <h3 className="text-3xl font-blod text-slate-900">{title}</h3>
        <p className="pt-3 text-slate-700 text-base text-justify">{desc}</p>
      </Link>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5">
      <span className="text-2xl font-semibold mb-2">{price}</span>
      <Button buttonClassName="bg-button" onClick={() => handleAddToCart(id)}>
        Beli
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
