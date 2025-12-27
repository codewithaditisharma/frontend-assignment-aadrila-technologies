import { BlogsSection } from "./sections/BlogsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { HeroSection } from "./sections/HeroSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { OurProductsSection } from "./sections/OurProductsSection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";

export const Website = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative overflow-x-hidden">
      <HeroSection />
      <HeroBannerSection />
      <IndustriesSection />
      <OurProductsSection />
      <ProductDetailsSection />
      <ContactUsSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
};
