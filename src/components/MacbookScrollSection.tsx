import Link from "next/link";
import { FC } from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Image from "next/image";
import logo from "../../public/assets/web-logo.png";

interface MacbookScrollProps {}

const MacbookScrollSection: FC<MacbookScrollProps> = ({}) => {
  return (
    <div className="overflow-hidden bg-neutral-950  w-full max-w-screen-xl mx-auto">
      <MacbookScroll
        title={
          <span>
            Seamless Interaction: Discover Our Bot in Action
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

export default MacbookScrollSection;
