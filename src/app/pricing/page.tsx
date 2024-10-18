import FAQ from "@/components/FAQ";
import PricingCard from "@/components/PricingCard";
import { FC } from "react";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import Heading from "@/components/Heading";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PricingCard />
      <div className="mb-24">
        <FAQ />
        <Heading title="Anything" />
        <CardHoverEffectDemo />
        <BackgroundBeamsWithCollisionDemo />
      </div>
    </>
  );
};

export default page;
