import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { HeroSection } from "../Website/sections/HeroSection/HeroSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  inquiryType: string;
  message: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "MANSI SHUKLA",
    position: "CEO FutureSphere",
    description:
      "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
    image: "/img_member_image_250x250.png",
  },
  {
    id: 2,
    name: "JOHN DOE",
    position: "CTO FutureSphere",
    description:
      "Leading innovation in document automation technology with over 15 years of experience in AI and machine learning solutions.",
    image: "/img_member_image.png",
  },
  {
    id: 3,
    name: "JANE SMITH",
    position: "Head of Product",
    description:
      "Passionate about creating user-centric solutions that transform how businesses handle document processing and fraud detection.",
    image: "/img_member_image_150x150.png",
  },
];

export default function AboutUsPage() {
  const [currentMember, setCurrentMember] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    inquiryType: "",
    message: "",
  });

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (): void => {
    console.log("Form submitted:", formData);
  };

  const handleNavigation = (direction: "prev" | "next"): void => {
    if (direction === "prev") {
      if (currentMember > 0) {
        const newIndex = currentMember - 1;
        setCurrentMember(newIndex);
        // Smooth scroll to team section
        setTimeout(() => {
          const teamSection = document.getElementById("team-section");
          if (teamSection) {
            teamSection.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      }
    } else if (direction === "next") {
      if (currentMember < teamMembers.length - 1) {
        const newIndex = currentMember + 1;
        setCurrentMember(newIndex);
        // Smooth scroll to team section
        setTimeout(() => {
          const teamSection = document.getElementById("team-section");
          if (teamSection) {
            teamSection.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <main className="w-full pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            alt="Background"
            src="/img_abstractbluebackgroundwithdynamicshape_1.png"
          />
          <div className="absolute inset-0 bg-white/20 z-[1]"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
            <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              {/* About Us Title Section */}
              <div className="flex flex-col gap-3 sm:gap-4 items-center bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12 shadow-lg w-full max-w-md animate-fade-up">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center text-[#141219] font-raleway">
                  About Us
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center bg-gradient-to-r from-[#cd6028] to-[#3e6eb4] bg-clip-text text-transparent font-manrope">
                  <span className="font-normal">
                    Meet the Minds Shaping Document Automation
                  </span>
                  <span className="font-bold">.</span>
                </p>
              </div>

              {/* Vision Section */}
              <div
                className="w-full max-w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-[58%] bg-white/90 backdrop-blur-sm rounded-tl-lg sm:rounded-tl-none rounded-tr-[40px] sm:rounded-tr-[70px] rounded-bl-lg sm:rounded-bl-none rounded-br-[40px] sm:rounded-br-[70px] p-4 sm:p-6 shadow-lg animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-0">
                  <p className="text-sm sm:text-base font-medium leading-relaxed text-center md:text-right text-[#696969] w-full md:w-[66%] font-manrope order-2 md:order-1">
                    To redefine document management with cutting-edge technology
                    that ensures accuracy, efficiency, and trust.
                  </p>

                  <div className="flex flex-row items-center gap-3 sm:gap-5 md:gap-7 ml-0 md:ml-7 order-1 md:order-2">
                    <div className="w-1 h-12 sm:h-16 md:h-20 bg-[#cd6028] hidden sm:block"></div>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-left text-[#141219] whitespace-pre-line font-raleway">
                      {"Our\nVision"}
                    </h2>

                    <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[#3e6eb4] rounded-full ml-3 sm:ml-5 md:ml-7">
                      <img
                        src="/img_vision_icon.svg"
                        alt="Vision Icon"
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Section */}
              <div
                className="w-full max-w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-[58%] self-center md:self-end bg-white/90 backdrop-blur-sm rounded-tl-[40px] sm:rounded-tl-[70px] rounded-tr-lg sm:rounded-tr-none rounded-bl-[40px] sm:rounded-bl-[70px] rounded-br-lg sm:rounded-br-none p-4 sm:p-6 shadow-lg animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-5 md:gap-0">
                  <div className="flex flex-row items-center gap-3 sm:gap-5 md:gap-7 w-full md:w-[34%] justify-center md:justify-start order-1 md:order-1">
                    <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:min-w-28 md:h-28 bg-[#3e6eb4] rounded-full">
                      <img
                        src="/img_mission_icon.svg"
                        alt="Mission Icon"
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                      />
                    </div>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-center md:text-right text-[#141219] whitespace-pre-line font-raleway">
                      {"Our\nMission"}
                    </h2>

                    <div className="w-1 h-12 sm:h-16 md:h-20 bg-[#cd6028] mr-3 sm:mr-5 md:mr-6 hidden sm:block"></div>
                  </div>

                  <p className="text-sm sm:text-base font-medium leading-relaxed text-center md:text-left text-[#696969] w-full md:w-[58%] font-manrope order-2 md:order-2">
                    To redefine document management with cutting-edge technology
                    that ensures accuracy, efficiency, and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team-section"
          className="w-full relative mt-8 sm:mt-12 mb-16 sm:mb-24 md:mb-32 scroll-mt-24"
        >
          <div className="w-full min-h-[400px] sm:min-h-[600px] md:min-h-[826px] relative">
            <img
              src="/img_combined_shape_copy.png"
              alt="Background Shape"
              className="absolute left-0 top-0 w-[32%] h-[400px] sm:h-[600px] md:h-[760px] object-cover hidden lg:block"
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
              <div className="flex flex-col justify-start items-center lg:items-start mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left text-[#141219] font-raleway">
                  Meet our team
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed text-center lg:text-left bg-gradient-to-r from-[#cd6028] to-[#3e6eb4] bg-clip-text text-transparent w-full mt-2 sm:mt-3 font-manrope">
                  Meet our passionate and talented team, committed to delivering
                  exceptional results, driving innovation, and transforming your
                  vision into reality.
                </p>
              </div>

              {/* Team Navigation and Members */}
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center w-full px-2 sm:px-4 md:px-8 lg:px-14">
                {/* Navigation Arrows */}
                <div className="flex flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => handleNavigation("prev")}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={currentMember === 0}
                    aria-label="Previous team member"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#3e6eb4]" />
                  </button>
                  <button
                    onClick={() => handleNavigation("next")}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={currentMember === teamMembers.length - 1}
                    aria-label="Next team member"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#3e6eb4]" />
                  </button>
                </div>

                {/* Team Member Display */}
                <div className="relative w-full max-w-4xl h-[350px] sm:h-[450px] md:h-[528px]">
                  {/* Background Pattern */}
                  <img
                    src="/img_shape.svg"
                    alt="Background Pattern"
                    className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 z-0 hidden sm:block"
                  />

                  {/* Side Members - Dynamic based on currentMember */}
                  {(() => {
                    const leftIndex =
                      currentMember > 0
                        ? currentMember - 1
                        : teamMembers.length - 1;
                    const rightIndex =
                      currentMember < teamMembers.length - 1
                        ? currentMember + 1
                        : 0;
                    return (
                      <>
                        <img
                          key={`left-${leftIndex}`}
                          src={
                            teamMembers[leftIndex]?.image ||
                            "/img_member_image_150x150.png"
                          }
                          alt={teamMembers[leftIndex]?.name || "Team Member"}
                          className="absolute top-8 sm:top-12 left-8 sm:left-12 md:left-20 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover z-10 hidden lg:block transition-opacity duration-300 ease-in-out"
                        />
                        <img
                          key={`right-${rightIndex}`}
                          src={
                            teamMembers[rightIndex]?.image ||
                            "/img_member_image.png"
                          }
                          alt={teamMembers[rightIndex]?.name || "Team Member"}
                          className="absolute top-8 sm:top-12 right-8 sm:right-12 md:right-20 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover z-10 hidden lg:block transition-opacity duration-300 ease-in-out"
                        />
                      </>
                    );
                  })()}

                  {/* Main Member */}
                  <div
                    key={`member-${currentMember}`}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 z-20 transition-all duration-500 ease-in-out"
                  >
                    <img
                      key={`img-${currentMember}`}
                      src={
                        teamMembers[currentMember]?.image ||
                        "/img_member_image_250x250.png"
                      }
                      alt={teamMembers[currentMember]?.name || "Team Member"}
                      className="w-full h-full rounded-full object-cover shadow-lg transition-opacity duration-500 ease-in-out"
                    />
                  </div>

                  {/* Member Info Card with Speech Bubble Pointer */}
                  <div
                    key={`info-${currentMember}`}
                    className="absolute bottom-0 left-0 right-0 mx-auto max-w-full transition-all duration-500 ease-in-out"
                  >
                    {/* Speech Bubble Pointer */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#3e6eb4] z-10"></div>

                    {/* Info Card */}
                    <div className="bg-[#3e6eb4] rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
                      <div className="flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white font-raleway uppercase animate-fade-up">
                          {teamMembers[currentMember]?.name || ""}
                        </h3>
                        <p
                          className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-center text-[#cd6028] mt-1 sm:mt-2 font-manrope animate-fade-up"
                          style={{ animationDelay: "0.1s" }}
                        >
                          {teamMembers[currentMember]?.position || ""}
                        </p>
                        <p
                          className="text-xs sm:text-sm md:text-base font-normal leading-relaxed text-center text-white mt-4 sm:mt-6 md:mt-8 whitespace-pre-line font-manrope px-2 animate-fade-up"
                          style={{ animationDelay: "0.2s" }}
                        >
                          {teamMembers[currentMember]?.description || ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <img
                src="/img_group_2.svg"
                alt="Decorative Element"
                className="absolute top-40 sm:top-56 right-8 sm:right-12 md:right-16 w-[14%] h-24 sm:h-32 hidden lg:block"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full relative bg-gray-50">
          <div className="w-full min-h-[600px] sm:min-h-[800px] md:min-h-[866px] relative">
            {/* Decorative Elements */}
            <img
              src="/img_group_2.svg"
              alt="Decorative Element"
              className="absolute bottom-16 sm:bottom-24 right-8 sm:right-12 md:right-16 w-[12%] h-20 sm:h-28 hidden lg:block"
            />
            <img
              src="/img_group_2_copy_2.svg"
              alt="Decorative Element"
              className="absolute top-0 left-2 w-[10%] h-16 sm:h-20 hidden md:block"
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
              <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 md:gap-12">
                {/* Left Content */}
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 justify-start items-start w-full lg:w-1/2">
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-left text-[#141219] font-raleway">
                      Contact Us
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-left bg-gradient-to-r from-[#cd6028] to-[#3e6eb4] bg-clip-text text-transparent w-full lg:w-[80%] font-manrope">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s.
                    </p>
                  </div>

                  {/* Office Information */}
                  <div className="flex flex-col gap-4 sm:gap-6 justify-start items-start w-full">
                    {/* U.S. Office */}
                    <div className="flex flex-col gap-2 justify-start items-start w-full">
                      <div className="flex flex-row justify-start items-center w-full">
                        <img
                          src="/img_group_50.svg"
                          alt="Location Icon"
                          className="w-3 h-4 object-contain"
                        />
                        <h3 className="text-sm sm:text-base font-bold leading-tight text-left text-black underline ml-2 font-raleway">
                          U.S. Office
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-normal leading-relaxed text-left text-black whitespace-pre-line font-manrope">
                        Aadrila Technologies INC,
                        {"\n"}8 The Green, Ste R, in the City of Dover County of
                        Kent Zip Code 19901.
                      </p>
                    </div>

                    {/* India Office */}
                    <div className="flex flex-col gap-2 justify-start items-start w-full">
                      <div className="flex flex-row justify-start items-center w-full">
                        <img
                          src="/img_group_50.svg"
                          alt="Location Icon"
                          className="w-3 h-4 object-contain"
                        />
                        <h3 className="text-sm sm:text-base font-bold leading-tight text-left text-black underline ml-2 font-raleway">
                          India Office
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-normal leading-relaxed text-left text-black w-full lg:w-[80%] whitespace-pre-line font-manrope">
                        Aadrila Technologies Private Limited,
                        {"\n"}Unit 707, Lotus Trade Centre, Sahakar Nagar, New
                        Link Road, Near D.N.Nagar, Andheri West, Mumbai,
                        Maharashtra 400053.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Contact Form */}
                <div className="w-full lg:w-1/2">
                  <Card className="bg-white rounded-xl sm:rounded-2xl shadow-lg border-0">
                    <CardContent className="p-6 sm:p-8 md:p-12 lg:p-16">
                      <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center w-full">
                        <div className="flex flex-col gap-4 sm:gap-6 justify-start items-center w-full">
                          {/* First Row */}
                          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-center w-full">
                            <Input
                              placeholder="Full Name"
                              value={formData.fullName}
                              onChange={(e) =>
                                handleInputChange("fullName", e.target.value)
                              }
                              className="h-auto px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-solid border-[#959595] font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base text-center focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out w-full"
                            />
                            <Input
                              placeholder="Email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              className="h-auto px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-solid border-[#959595] font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base text-center focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out w-full"
                            />
                          </div>

                          {/* Second Row */}
                          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-center w-full">
                            <Input
                              placeholder="Phone Number"
                              value={formData.phoneNumber}
                              onChange={(e) =>
                                handleInputChange("phoneNumber", e.target.value)
                              }
                              className="h-auto px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-solid border-[#959595] font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base text-center focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out w-full"
                            />
                            <Input
                              placeholder="Company Name"
                              value={formData.companyName}
                              onChange={(e) =>
                                handleInputChange("companyName", e.target.value)
                              }
                              className="h-auto px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-solid border-[#959595] font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base text-center focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out w-full"
                            />
                          </div>
                        </div>

                        {/* Inquiry Type Dropdown */}
                        <div className="relative w-full">
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) =>
                              handleInputChange("inquiryType", value)
                            }
                          >
                            <SelectTrigger className="w-full h-auto px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-solid border-[#959595] font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out">
                              <SelectValue placeholder="Inquiry Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="support">Support</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Message TextArea */}
                        <Textarea
                          placeholder="Message"
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className="min-h-[120px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[202px] px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-solid border-[#959595] font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base resize-none focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out w-full"
                          rows={6}
                        />

                        {/* Submit Button */}
                        <Button
                          onClick={handleSubmit}
                          className="w-full h-auto px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2"
                        >
                          Send Inquiry
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full bg-[#3e6eb4] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
              <div className="container mx-auto">
                <div className="flex flex-col gap-4 sm:gap-5 justify-center items-start">
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-left text-white font-manrope">
                    © 2025 by Aadrila Technologies Private Limited CIN
                    U74999UP2017PTC094688
                  </p>
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-left text-white whitespace-pre-line font-manrope">
                    Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow,
                    Lucknow,
                    {"\n"}Uttar Pradesh, India, 226024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
