import { Card, CardContent } from "../../../../components/ui/card";

const industries = [
  {
    icon: "/insurance-icon.png",
    title: "Insurance",
    description:
      "Automate claims processing with accurate document validation.",
  },
  {
    icon: "/lending-icon.png",
    title: "Lending",
    description:
      "Ensure faster loan approvals with fraud detection and instant verification.",
  },
  {
    icon: "/healthcare-icon.png",
    title: "Healthcare",
    description:
      "Streamline patient record management and ensure compliance with HIPAA standards.",
  },
];

export const IndustriesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <img
        className="absolute w-[52.85%] h-[97.44%] top-0 left-[-4.31%] pointer-events-none hidden lg:block"
        alt="Combined shape copy"
        src="/combined-shape-copy-1.svg"
      />

      <img
        className="absolute w-[11.43%] h-[13.50%] top-[14.60%] left-[60.97%] pointer-events-none hidden lg:block"
        alt="Group"
        src="/group-2.png"
      />

      <img
        className="absolute h-[9.44%] top-[79.77%] right-0 w-[200px] sm:w-[250px] md:w-[311px] pointer-events-none hidden md:block"
        alt="Group copy"
        src="/group-2-copy-2.png"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
        <div className="flex flex-col items-start gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="relative flex items-center justify-center self-stretch bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-manrope font-bold text-transparent text-lg sm:text-xl md:text-2xl tracking-[0] leading-normal animate-fade-up">
            AI-driven innovation for growth.
          </div>

          <h2 className="relative w-full max-w-[821px] font-raleway font-semibold text-[#141219] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-1.00px] leading-tight sm:leading-tight md:leading-normal animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Industries We Empower
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="w-full h-auto min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-white rounded-[20px] shadow-[0px_0px_20px_#0000001f] hover:shadow-[0px_0px_30px_#0000002f] transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <CardContent className="flex flex-col items-center justify-center gap-4 sm:gap-6 p-6 sm:p-8 h-full">
                <img
                  className="relative w-[57px] h-[57px] sm:w-[64px] sm:h-[64px] object-contain"
                  alt={`${industry.title} icon`}
                  src={industry.icon}
                />

                <div className="items-start relative self-stretch w-full flex-[0_0_auto] flex flex-col gap-3 sm:gap-4">
                  <h3 className="relative self-stretch font-raleway font-semibold text-[#141219] text-xl sm:text-2xl text-center tracking-[0] leading-normal">
                    {industry.title}
                  </h3>

                  <p className="relative self-stretch font-manrope font-medium text-[#696969] text-sm sm:text-base text-center tracking-[-0.75px] leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
