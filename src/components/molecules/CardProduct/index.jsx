import Button from "@/components/atoms/Button/Button";
import { formatCurrency } from "@/helpers/util/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
//  sebagai wadah : untuk beberapa fungsi anak (header,body,footer)
// komponen ini akan jadi komponent pembungkus children
function CardProduct({ children }) {
  return (
    <>
      <div className="flex rounded-lg bg-aigen p-1 shadow-xl">
        <div className="w-full max-w-xs bg-white rounded-lg flex flex-col h-full">{children}</div>
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
        className="p-4 rounded-t-lg w-full aspect-video object-contain"
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
        <h3 className="text-2xl font-blod text-slate-900 line-clamp-2">{title}</h3>
        <p className="pt-3 text-slate-700 text-base text-justify line-clamp-2">{desc}</p>
      </Link>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex flex-col items-center justify-end px-5 pb-5 mt-auto w-full">
      <span className="text-2xl font-semibold mb-2">{formatCurrency(price)}</span>
      <Button buttonClassname={"w-full"} onClick={() => handleAddToCart(id)}>
        Beli
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
