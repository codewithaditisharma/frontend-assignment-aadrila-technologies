import { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "How AI is Revolutionizing Document Management for Enterprises",
    date: "24 July, 2023",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    shapeImage: "/shape.png",
  },
  {
    title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
    date: "24 July, 2023",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    shapeImage: "/shape-1.png",
  },
  {
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "24 July, 2023",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
    shapeImage: "/shape-2.png",
  },
];

export const BlogsSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop: 3 items
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2); // Tablet: 2 items
      } else {
        setItemsPerView(1); // Mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, blogPosts.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <img
        className="absolute w-[13.12%] h-[21.94%] top-0 left-[3.47%] pointer-events-none hidden md:block"
        alt="Group"
        src="/group-2-2.png"
      />

      <img
        className="absolute w-[18.33%] h-[11.34%] top-[34.78%] left-[81.18%] pointer-events-none hidden lg:block"
        alt="Group copy"
        src="/group-2-copy-2-3.png"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        <h2 className="w-full max-w-[821px] mx-auto font-raleway font-semibold text-[#141219] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[-1.00px] leading-tight sm:leading-tight md:leading-normal mb-4 sm:mb-6 animate-fade-up">
          Blogs
        </h2>

        <div className="w-full max-w-[821px] mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="flex flex-wrap items-center justify-center bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-manrope font-normal text-transparent text-base sm:text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-relaxed sm:leading-normal">
            <span className="text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </span>
            <span className="font-bold text-black">.</span>
          </p>
        </div>

        <div className="relative">
          <div className="relative max-w-[1170px] mx-auto mb-12 sm:mb-16 overflow-hidden">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out hover:bg-[#3e6eb4] hover:text-white text-[#3e6eb4] focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous blog posts"
              disabled={currentIndex === 0 && maxIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out hover:bg-[#3e6eb4] hover:text-white text-[#3e6eb4] focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next blog posts"
              disabled={currentIndex >= maxIndex && maxIndex > 0}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Carousel Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500 ease-in-out">
              {visiblePosts.map((post, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="flex flex-col w-full min-h-[235px] sm:h-[235px] bg-white rounded-[10px] border border-solid border-[#ececec] hover:shadow-lg hover:border-[#3e6eb4]/30 transition-all duration-300 ease-in-out cursor-pointer transform hover:-translate-y-1">
                    <CardContent className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 h-full">
                      <div className="flex items-center gap-2.5 w-full">
                        <div className="flex flex-col items-start gap-2 sm:gap-2.5 flex-1">
                          <h3 className="text-[#141219] font-raleway font-bold text-sm sm:text-base tracking-[0] leading-tight sm:leading-normal line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="font-manrope font-medium text-[#719ad0] text-xs tracking-[0] leading-normal">
                            {post.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#696969] font-manrope font-normal text-xs sm:text-sm tracking-[0] leading-relaxed line-clamp-4">
                        {post.description}
                      </p>
                    </CardContent>
                  </Card>
                  <img
                    className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 w-[250px] sm:w-[300px] md:w-[392px] h-auto pointer-events-none hidden sm:block"
                    alt="Shape"
                    src={post.shapeImage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ease-in-out ${
                  currentIndex === index
                    ? "bg-[#3e6eb4] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
