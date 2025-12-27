import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const ProductDetailsSection = (): JSX.Element => {
  const features = [
    "Automates document collection, routing, and task assignments.",
    "Real-time tracking with advanced dashboards.",
    "Seamless integration with enterprise systems via APIs.",
  ];

  const benefits = [
    "Reduce turnaround times by 50%.",
    "Improve operational efficiency with minimal manual effort.",
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <img
        className="absolute w-[52.85%] h-[150.10%] top-[-23.96%] left-[-9.86%] pointer-events-none hidden lg:block"
        alt="Combined shape copy"
        src="/combined-shape-copy-3.svg"
      />

      <img
        className="absolute w-[11.43%] h-[20.80%] top-[-11.54%] left-[77.43%] pointer-events-none hidden lg:block"
        alt="Group"
        src="/group-2-1.png"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <div className="flex items-center justify-center bg-[#5b5b5b] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden h-[250px] sm:h-[350px] md:h-[450px] lg:h-[506px] order-2 lg:order-1 animate-fade-up">
            <img
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Doc pilot"
              src="/docpilot.png"
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Badge className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 w-fit rounded-[50px] bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] border-0 hover:bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] transition-all duration-200 ease-in-out">
              <span className="font-raleway font-bold text-white text-base sm:text-lg md:text-xl tracking-[2px] sm:tracking-[4.00px] leading-5">
                DocPilot
              </span>
            </Badge>

            <h2 className="font-raleway font-bold text-[#141219] text-2xl sm:text-3xl md:text-[32px] tracking-[0] leading-tight sm:leading-tight md:leading-[48.0px]">
              Streamline Document Workflows with Automation
            </h2>

            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="font-raleway font-bold text-[#696969] text-lg sm:text-xl leading-5">
                Features:
              </p>
              <ul className="font-manrope text-[#696969] text-sm sm:text-base leading-relaxed sm:leading-[32.0px] space-y-1 sm:space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="transition-opacity duration-200 hover:opacity-80">• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="font-raleway font-bold text-[#696969] text-lg sm:text-xl leading-5">
                Benefits:
              </p>
              <ul className="font-manrope text-[#696969] text-sm sm:text-base leading-relaxed sm:leading-[32.0px] space-y-1 sm:space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="transition-opacity duration-200 hover:opacity-80">• {benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-6 md:gap-7 mt-4 sm:mt-6">
              <Button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 md:px-9 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
                Learn More
              </Button>

              <Button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 md:px-9 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
