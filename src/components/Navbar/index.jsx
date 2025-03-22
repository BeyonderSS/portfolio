import React from "react";
import { blushAsliring } from "../fonts";

function Navbar() {
  return (
    <div className={`${blushAsliring.className} my-10 md:px-[10vh] px-4  fixed top-0 w-full flex justify-between`}>
      <div>MG</div>
      <div className="text-xl">Wroks</div>
    </div>
  );
}

export default Navbar;
