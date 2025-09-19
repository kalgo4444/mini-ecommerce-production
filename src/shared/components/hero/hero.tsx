import { memo } from "react";
import HeroInfoSection from "./hero-info-section/hero-info-section";
import HeroImageSection from "./hero-image-section/hero-image-section";

const Hero = () => {
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-x-4">
          <HeroInfoSection />
          <HeroImageSection />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
