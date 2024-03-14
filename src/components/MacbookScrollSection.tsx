import Link from "next/link";
import { FC } from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Image from "next/image";
import logo from "../../public/assets/web-logo.png";

interface MacbookScrollProps {}

const MacbookScrollSection: FC<MacbookScrollProps> = ({}) => {
  return (
    <div className="overflow-hidden bg-slate-950  w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        badge={
          <Link href="https://therencho.com/">
  <Image
            src={logo}
            className="h-8 w-auto "
            alt=" Logo"
            width={100}
            height={100}
          />          </Link>
        }
        src={`/assets/Dashboard.png`}
        showGradient={false}
      />
    </div>
  );
};

// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width="0.814764in" height="0.737142in" version="1.1" 
viewBox="0 0 245.02 221.68"
>
 <defs>
   <clipPath id="id0">
    <rect y="0" width="245.02" height="221.67"/>
   </clipPath>
 </defs>
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g >
   <image id="web-logo.png" x="-0" y="-0" width="245.02" height="221.68" />
  </g>
 </g>
</svg>
  );
};
export default MacbookScrollSection;
