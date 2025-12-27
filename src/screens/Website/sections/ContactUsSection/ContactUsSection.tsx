import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactUsSection = (): JSX.Element => {
  const features = [
    "OCR and NLP-based data extraction.",
    "Handles unstructured documents across industries.",
    "Validates fields using external data sources.",
  ];

  const benefits = [
    "Process 10,000+ documents in minutes.",
    "Achieve 99% data accuracy with AI-driven validation.",
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <img
        className="absolute h-[150.40%] top-[-24.31%] right-[-290px] w-[761px] pointer-events-none hidden lg:block"
        alt="Combined shape copy"
        src="/combined-shape-copy.svg"
      />

      <img
        className="absolute w-[21.60%] h-[14.57%] top-[-11.26%] left-[14.86%] pointer-events-none hidden md:block"
        alt="Group copy"
        src="/group-2-copy-2-2.png"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="flex flex-col gap-4 sm:gap-6 animate-fade-up">
            <Badge className="w-fit px-4 sm:px-6 py-3 sm:py-4 rounded-[50px] bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] border-0 transition-all duration-200 ease-in-out">
              <span className="font-raleway font-bold text-white text-base sm:text-lg md:text-xl tracking-[2px] sm:tracking-[4.00px] leading-5">
                Doxtract
              </span>
            </Badge>

            <h2 className="font-raleway font-bold text-[#141219] text-2xl sm:text-3xl md:text-[32px] tracking-[0] leading-tight sm:leading-tight md:leading-[48.0px]">
              Extract, Validate, and Process Documents with Ease
            </h2>

            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="font-raleway font-normal text-lg sm:text-xl tracking-[0] leading-5">
                <span className="font-bold text-[#696969]">Features:</span>
                <ul className="font-manrope text-[#696969] text-sm sm:text-base leading-relaxed sm:leading-[32.0px] mt-2 space-y-1 sm:space-y-2">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="transition-opacity duration-200 hover:opacity-80"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-raleway font-normal text-lg sm:text-xl tracking-[0] leading-5">
                <span className="font-bold text-[#696969]">Benefits:</span>
                <ul className="font-manrope text-[#696969] text-sm sm:text-base leading-relaxed sm:leading-[32.0px] mt-2 space-y-1 sm:space-y-2">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="transition-opacity duration-200 hover:opacity-80"
                    >
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-start gap-4 sm:gap-6 md:gap-7">
              <Button className="w-full sm:w-auto px-6 sm:px-8 md:px-9 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
                Learn More
              </Button>

              <Button className="w-full sm:w-auto px-6 sm:px-8 md:px-9 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2">
                Schedule a Demo
              </Button>
            </div>
          </div>

          <div
            className="flex items-center justify-center animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Card className="w-full max-w-[600px] bg-[#5b5b5b] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardContent className="p-0">
                <img
                  className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[512px] w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  alt="Doxtract"
                  src="/doxtract.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
