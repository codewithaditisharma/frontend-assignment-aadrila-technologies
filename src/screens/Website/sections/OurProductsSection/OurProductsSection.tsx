import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const OurProductsSection = (): JSX.Element => {
  const features = [
    "Detects near-duplicates and tampered documents.",
    "Identifies fraudulent patterns across large repositories.",
    "Multi-language support for global adaptability.",
  ];

  const benefits = [
    "Save 30% time on manual checks.",
    "Reduce document fraud by up to 40%.",
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <img
        className="absolute w-[52.85%] h-[88.80%] top-[11.20%] left-[55.62%] pointer-events-none hidden lg:block"
        alt="Combined shape copy"
        src="/combined-shape-copy.svg"
      />

      <img
        className="absolute w-[21.60%] h-[8.60%] top-0 left-0 pointer-events-none hidden md:block"
        alt="Group copy"
        src="/group-2-copy-2-1.png"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 animate-fade-up">
          <div className="bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-manrope font-bold text-lg sm:text-xl md:text-2xl text-center tracking-[0] leading-normal">
            features and benefits.
          </div>

          <h2 className="w-full max-w-[821px] font-raleway font-semibold text-[#141219] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[-1.00px] leading-tight sm:leading-tight md:leading-normal animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-4 sm:gap-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <Badge className="w-fit px-4 sm:px-6 py-3 sm:py-4 rounded-[50px] bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] transition-all duration-200 ease-in-out">
              <span className="font-manrope font-bold text-white text-base sm:text-lg md:text-xl tracking-[0] leading-5">
                DocSim
              </span>
            </Badge>

            <h3 className="font-raleway font-bold text-[#141219] text-2xl sm:text-3xl md:text-[32px] tracking-[0] leading-tight sm:leading-tight md:leading-[48.0px]">
              AI-Powered Document Similarity Engine
            </h3>

            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="font-raleway font-bold text-[#696969] text-lg sm:text-xl leading-5 tracking-[0]">
                Features:
              </p>
              <ul className="font-manrope text-[#696969] text-sm sm:text-base leading-relaxed sm:leading-[32.0px] list-none space-y-1 sm:space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="transition-opacity duration-200 hover:opacity-80">• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="font-raleway font-bold text-[#696969] text-lg sm:text-xl leading-5 tracking-[0]">
                Benefits:
              </p>
              <ul className="font-manrope text-[#696969] text-sm sm:text-base leading-relaxed sm:leading-[32.0px] list-none space-y-1 sm:space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="transition-opacity duration-200 hover:opacity-80">• {benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-start gap-4 sm:gap-6 md:gap-7 mt-4">
              <Button className="w-full sm:w-auto px-6 sm:px-8 md:px-9 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
                Learn More
              </Button>

              <Button className="w-full sm:w-auto px-6 sm:px-8 md:px-9 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
                Schedule a Demo
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#5b5b5b] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden h-[250px] sm:h-[350px] md:h-[450px] lg:h-full min-h-[250px] animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Doc sim"
              src="/docsim.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
