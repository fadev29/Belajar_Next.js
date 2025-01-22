import React from "react";
/**
 * Props (singkatan dari properties)
 * cara untuk mengirim data/state dari komponen satu ke komponen lain
 * props bisa dipake buat kustomusasi gaya,ngirim atau menerima data dari API den sebagai nya
 */
const ButtonWithProps = ({ text, className }) => {
  return (
    <button className={`h-10 px-6  font-semibold  text-white ${className}`}>
      {text}
    </button>
  );
};

export default ButtonWithProps;
