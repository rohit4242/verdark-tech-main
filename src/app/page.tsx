

import Heading from "@/components/Heading";
import MacbookScrollSection from "@/components/MacbookScrollSection";
import Hero from "@/components/hero";
import Image from "next/image";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import simple from "../../public/assets/simple.webp";

import secure from "../../public/assets/secure.webp";
import fast from "../../public/assets/fast.webp";


const content = [
  {
    title: "Embrace Simplicity",
    description:
      "Effortlessly navigate the crypto market with Vedark's user-friendly interface. Our intuitive design allows you to set up and manage your automated trading strategies with ease, even if you're new to crypto.",
    content: (
      <div className="h-full w-full  flex items-center justify-right text-white">
        <Image
          src={simple}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Prioritize Security",
    description:
      "Vedark prioritizes the security of your crypto assets. Our robust security measures, including API Key Permissions, Whitelisting Withdrawal Addresses, advanced encryption and two-factor authentication, ensure your funds remain protected while you trade.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={secure}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Experience Speed",
    description:
      "Don't let fleeting market moments slip away. Vedark boasts lightning-fast trade execution powered by sophisticated algorithms. These algorithms analyze market conditions in real-time, allowing Vedark to place and execute your trades with precision and unparalleled speed. This agility gives you a crucial edge in the dynamic crypto market, helping you capitalize on sudden price fluctuations and maximize your potential returns. With Vedark at the helm, you can trade with confidence, knowing your orders are executed swiftly and efficiently. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={fast}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-10 p-4">
      <Hero />


      
      <MacbookScrollSection />

<BackgroundBeamsWithCollisionDemo/>


    </main>
  );
}
