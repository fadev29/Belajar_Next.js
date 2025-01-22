import React from "react";
/**
 * props childen
 * properti yang dipakai untuk mengrim komponen anak(childen) ke dalam componen induk(parent)
 * contoh card adalah componet parent sebagai wrapper
 * childen adlah componenst yang ada di dalam komponents <card>{komponents cilden}</card>
 */
const Card = ({ children, childrenclassName }) => {
  return (
    <div className={`bg-white rounded-lg shadow w-[300px]${childrenclassName}`}>
      {children}
    </div>
  );
};

export default Card;
