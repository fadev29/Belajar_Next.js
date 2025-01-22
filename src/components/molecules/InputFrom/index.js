import React from "react";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
function InputFrom({ label, name, placeholder, type }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} id={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputFrom;
