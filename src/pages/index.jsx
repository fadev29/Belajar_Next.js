import Button from "@/components/Button/Button";
import ButtonWithProps from "@/components/ButtonWithProps";
import Card from "@/components/CardWitchChilden";

import Image from "next/image";
export default function Home() {
  //  angap data
  const data = {
    text: "klik aku",
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* button biasa */}
        <button className="h-10 px-6 font-semibold bg-blue-500 hover:bg-blue-700 text-white">
          click me!
        </button>
        {/* button dengan basis komponen */}
        <Button />
        {/* komponen button dengan props */}
        <ButtonWithProps text={data.text} className={"bg-red-500"} />
        <Card childrenclassName={"p-4 border"}>
          <Image src="/next.svg" alt="nextjs.logo" width={300} height={300} />
          <h2 className="text-xl font-bold my-3">card title</h2>
          <p>lorem ipsum dolor sit,amet consectur</p>
          <ButtonWithProps
            text={"test"}
            className=" w-full bg-yellow-300 text-black font-semibold hover:bg-yellow-100"
          />
        </Card>
      </div>
    </>
  );
}
