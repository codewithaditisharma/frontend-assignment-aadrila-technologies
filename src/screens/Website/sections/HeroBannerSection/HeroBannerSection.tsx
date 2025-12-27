import { Button } from "../../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  const ctaButtons = [{ text: "Get a Demo" }, { text: "Explore Solutions" }];

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:h-[914px] overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Abstract blue background"
        src="/abstract-blue-background-with-dynamic-shape-1.png"
      />

      <div className="absolute left-0 bottom-0 w-full h-[110px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_24%,rgba(255,255,255,0.82)_59%,rgba(255,255,255,0.55)_85%,rgba(255,255,255,0)_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-24 sm:pt-28 md:pt-32 lg:pt-[220px] pb-16 sm:pb-20 md:pb-24 lg:pb-0">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-manrope font-extrabold text-[#1e1c26] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight sm:leading-tight md:leading-tight lg:leading-[76.8px] mb-4 sm:mb-6 md:mb-8 animate-fade-up">
              AI-Powered Document Automation & Fraud Detection
            </h1>

            <p className="font-manrope font-medium text-[#1e1c26] text-base sm:text-lg md:text-xl tracking-[0] leading-relaxed sm:leading-relaxed md:leading-[31.2px] mb-6 sm:mb-8 md:mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Enhance security, accuracy, and efficiency with our cutting-edge AI
              solutions for seamless document processing and fraud prevention.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-6 md:gap-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  className="w-full sm:w-auto px-8 sm:px-12 md:px-20 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-5 whitespace-nowrap transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2"
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[547px] lg:w-[635px] mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[318px] h-auto"
              alt="Background"
              src="/bg.svg"
            />

            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[22.41%] h-[187px] blur-[2px] hidden lg:block">
              <img
                className="absolute w-[99.68%] h-[99.97%] top-[-19.17%] left-[-27.93%]"
                alt="Rectangle"
                src="/rectangle-9401.svg"
              />

              <img
                className="absolute w-[25.49%] h-[19.48%] top-[-4.24%] left-[73.30%]"
                alt="Polygon"
                src="/polygon-1.svg"
              />

              <img
                className="absolute w-full h-[30.25%] top-[69.75%] left-0"
                alt="Vector"
                src="/vector-1.svg"
              />

              <img
                className="absolute w-[80.35%] h-[7.83%] top-[24.80%] left-[8.80%]"
                alt="Lorem ipsum dolor"
                src="/lorem-ipsum-dolor-sit-amet--consectetuer-adipiscing-elit--sed-di.png"
              />

              <img
                className="absolute w-[81.35%] h-[5.32%] top-[34.76%] left-[8.80%]"
                alt="Dolore magna aliquam"
                src="/dolore-magna-aliquam-erat-volutpat--ut-wisi-enim-ad-minim-veniam.png"
              />

              <img
                className="absolute w-[70.49%] h-[5.32%] top-[42.21%] left-[8.80%]"
                alt="Suscipit lobortis"
                src="/suscipit-lobortis-nisl-ut-aliquip-ex-ea-commodo-consequat-.png"
              />

              <img
                className="absolute w-[22.89%] h-[17.08%] top-[55.51%] left-[8.92%]"
                alt="Lorem ipsum dolor"
                src="/lorem-ipsum-dolor-sit-amet--consectetuer-adipiscing-elit--sed-di-1.png"
              />

              <img
                className="absolute w-[50.63%] h-[29.87%] top-[55.04%] left-[42.55%]"
                alt="Group"
                src="/group-58.png"
              />

              <img
                className="absolute w-[60.37%] h-[3.92%] top-[11.61%] left-[9.16%]"
                alt="Growth document"
                src="/growth-document.png"
              />
            </div>

            <img
              className="absolute top-[9.14%] left-[23.98%] w-[40.80%] h-[68.56%] object-contain"
              alt="License"
              src="/license.png"
            />

            <img
              className="absolute top-36 left-[71.18%] w-[21.02%] h-[267px] object-contain hidden lg:block"
              alt="Invoice"
              src="/invocie.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
