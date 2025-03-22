import { blushAsliring } from "@/components/fonts";
import { Copyright } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer
      className={`${blushAsliring.className}   my-10 md:mx-[10vh] mx-4 flex justify-between `}
    >
      <div className="flex gap-1 ">
        <Copyright className="h-4" /> <span className=" ">Puneet Bhardwaj</span>
      </div>
      <div className="text-xl">Profile</div>
    </footer>
  );
}

export default Footer;
