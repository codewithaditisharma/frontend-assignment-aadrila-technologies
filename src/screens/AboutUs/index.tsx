"use client";
import { useState } from "react";
import Header from "@/components/common/Header";
import Button from "@/components/ui/Button";
import EditText from "@/components/ui/EditText";
import TextArea from "@/components/ui/TextArea";

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

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "MANSI SHUKLA",
      position: "CEO FutureSphere",
      description:
        "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
      image: "/img_member_image_250x250.png",
    },
  ];

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (): void => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleNavigation = (direction: "prev" | "next"): void => {
    if (direction === "prev" && currentMember > 0) {
      setCurrentMember((prev) => prev - 1);
    } else if (direction === "next" && currentMember < teamMembers.length - 1) {
      setCurrentMember((prev) => prev + 1);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#ffffff]"
      style={{
        backgroundImage:
          "url(/img_abstractbluebackgroundwithdynamicshape_1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-[50px] md:py-[66px] lg:py-[66px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-[60px] md:gap-[80px] lg:gap-[80px] mb-[75px] md:mb-[100px] lg:mb-[100px]">
              {/* About Us Title Section */}
              <div className="flex flex-col gap-[8px] md:gap-[12px] lg:gap-[12px] items-center bg-[#ffffff7f] rounded-[14px] px-[30px] md:px-[44px] lg:px-[44px] py-[30px] md:py-[44px] lg:py-[44px] shadow-[0px_0px_20px_#0000001e] w-full max-w-md">
                <h1
                  className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-center text-[#141219]"
                  style={{ fontFamily: "Raleway" }}
                >
                  About Us
                </h1>
                <p
                  className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] md:leading-[26px] lg:leading-[28px] text-center bg-gradient-to-r from-[#cd6028] to-[#3e6eb4] bg-clip-text text-transparent"
                  style={{ fontFamily: "Manrope" }}
                >
                  <span className="font-normal">
                    Meet the Minds Shaping Document Automation
                  </span>
                  <span className="font-bold">.</span>
                </p>
              </div>

              {/* Vision Section */}
              <div className="w-full max-w-[58%] bg-[#ffffff7f] rounded-tl-[0px] rounded-tr-[70px] rounded-bl-[0px] rounded-br-[70px] p-[14px] shadow-[0px_0px_20px_#0000001e]">
                <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-0">
                  <p
                    className="text-[14px] md:text-[16px] lg:text-[16px] font-medium leading-[18px] md:leading-[21px] lg:leading-[21px] text-right text-[#696969] w-full md:w-[66%]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    To redefine document management with cutting-edge technology
                    that ensures accuracy, efficiency, and trust.
                  </p>

                  <div className="flex flex-row items-center gap-[20px] md:gap-[28px] lg:gap-[28px] ml-0 md:ml-[28px]">
                    <div className="w-[4px] h-[60px] md:h-[78px] lg:h-[78px] bg-[#cd6028]"></div>

                    <h2
                      className="text-[20px] md:text-[24px] lg:text-[24px] font-bold leading-[30px] md:leading-[38px] lg:leading-[38px] text-left text-[#141219] whitespace-pre-line"
                      style={{ fontFamily: "Raleway" }}
                    >
                      {"Our\nVision"}
                    </h2>

                    <div className="flex justify-center items-center w-[80px] md:w-[110px] lg:w-[110px] h-[80px] md:h-[110px] lg:h-[110px] bg-[#3e6eb4] rounded-[56px] ml-[20px] md:ml-[28px] lg:ml-[28px]">
                      <img
                        src="/img_vision_icon.svg"
                        alt="Vision Icon"
                        className="w-[40px] md:w-[50px] lg:w-[50px] h-[40px] md:h-[50px] lg:h-[50px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Section */}
              <div className="w-full max-w-[58%] self-end bg-[#ffffff7f] rounded-tl-[70px] rounded-tr-[0px] rounded-bl-[70px] rounded-br-[0px] p-[14px] shadow-[0px_0px_20px_#0000001e]">
                <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-0">
                  <div className="flex flex-row items-center gap-[20px] md:gap-[28px] lg:gap-[28px] w-full md:w-[34%] justify-between md:justify-start">
                    <div className="flex justify-center items-center w-[80px] md:w-[108px] lg:w-[108px] h-[80px] md:h-[108px] lg:h-[108px] bg-[#3e6eb4] rounded-[56px]">
                      <img
                        src="/img_mission_icon.svg"
                        alt="Mission Icon"
                        className="w-[45px] md:w-[56px] lg:w-[56px] h-[45px] md:h-[56px] lg:h-[56px]"
                      />
                    </div>

                    <h2
                      className="text-[20px] md:text-[24px] lg:text-[24px] font-bold leading-[30px] md:leading-[38px] lg:leading-[38px] text-right text-[#141219] whitespace-pre-line w-[32%]"
                      style={{ fontFamily: "Raleway" }}
                    >
                      {"Our\nMission"}
                    </h2>

                    <div className="w-[4px] h-[60px] md:h-[78px] lg:h-[78px] bg-[#cd6028] mr-[20px] md:mr-[24px] lg:mr-[24px]"></div>
                  </div>

                  <p
                    className="text-[14px] md:text-[16px] lg:text-[16px] font-medium leading-[18px] md:leading-[21px] lg:leading-[21px] text-left text-[#696969] w-full md:w-[58%]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    To redefine document management with cutting-edge technology
                    that ensures accuracy, efficiency, and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full relative mt-[20px] mb-[120px]">
          <div className="w-full h-[826px] relative">
            <img
              src="/img_combined_shape_copy.png"
              alt="Background Shape"
              className="absolute left-0 top-0 w-[32%] h-[760px] object-cover self-center"
            />

            <div className="absolute top-[60px] left-[302px] right-0 flex flex-col justify-start items-start ml-[-266px]">
              <h2
                className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-center text-[#141219] ml-[260px]"
                style={{ fontFamily: "Raleway" }}
              >
                Meet our team
              </h2>
              <p
                className="text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[28px] md:leading-[30px] lg:leading-[32px] text-center bg-gradient-to-r from-[#cd6028] to-[#3e6eb4] bg-clip-text text-transparent w-full mt-[-4px]"
                style={{ fontFamily: "Manrope" }}
              >
                Meet our passionate and talented team, committed to delivering
                exceptional results, driving innovation, and transforming your
                vision into reality.
              </p>
            </div>

            {/* Team Navigation and Members */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-[40px] items-center w-full px-[56px]">
              {/* Navigation Arrows */}
              <div className="flex flex-row gap-[14px] justify-center items-center">
                <button
                  onClick={() => handleNavigation("prev")}
                  className="w-[38px] h-[38px] rounded-[8px] hover:bg-gray-100 transition-colors"
                  disabled={currentMember === 0}
                >
                  <img
                    src="/img_left_arrow.svg"
                    alt="Previous"
                    className="w-full h-full"
                  />
                </button>
                <button
                  onClick={() => handleNavigation("next")}
                  className="w-[38px] h-[38px] rounded-[8px] hover:bg-gray-100 transition-colors"
                  disabled={currentMember === teamMembers.length - 1}
                >
                  <img
                    src="/img_right_arrow.svg"
                    alt="Next"
                    className="w-full h-full"
                  />
                </button>
              </div>

              {/* Team Member Display */}
              <div className="relative w-[66%] h-[528px]">
                {/* Background Pattern */}
                <img
                  src="/img_shape.svg"
                  alt="Background Pattern"
                  className="absolute bottom-[94px] left-1/2 transform -translate-x-1/2 w-[162px] h-[162px] z-0"
                />

                {/* Side Members */}
                <img
                  src="/img_member_image.png"
                  alt="Team Member"
                  className="absolute top-[50px] right-[86px] w-[150px] h-[150px] rounded-[74px] object-cover z-10"
                />
                <img
                  src="/img_member_image_150x150.png"
                  alt="Team Member"
                  className="absolute top-[50px] left-[86px] w-[150px] h-[150px] rounded-[74px] object-cover z-10"
                />

                {/* Main Member */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] z-20">
                  <img
                    src={teamMembers[currentMember]?.image}
                    alt={teamMembers[currentMember]?.name}
                    className="w-full h-full rounded-[124px] object-cover"
                  />
                </div>

                {/* Member Info Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#3e6eb4] rounded-[16px] px-[34px] py-[34px] mx-auto max-w-full">
                  <div className="flex flex-col justify-center items-center text-center">
                    <h3
                      className="text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-tight text-[#ffffff]"
                      style={{ fontFamily: "Raleway" }}
                    >
                      {teamMembers[currentMember]?.name}
                    </h3>
                    <p
                      className="text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[28px] md:leading-[31px] lg:leading-[33px] text-center text-[#cd6028] mt-[4px]"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {teamMembers[currentMember]?.position}
                    </p>
                    <p
                      className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[18px] md:leading-[20px] lg:leading-[21px] text-center text-[#ffffff] mt-[30px] whitespace-pre-line"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {teamMembers[currentMember]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <img
              src="/img_group_2.svg"
              alt="Decorative Element"
              className="absolute top-[226px] right-[66px] w-[14%] h-[120px]"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full relative">
          <div className="w-full h-[866px] relative">
            {/* Decorative Elements */}
            <img
              src="/img_group_2.svg"
              alt="Decorative Element"
              className="absolute bottom-[102px] right-[68px] w-[12%] h-[104px]"
            />
            <img
              src="/img_group_2_copy_2.svg"
              alt="Decorative Element"
              className="absolute top-0 left-[8px] w-[10%] h-[72px]"
            />

            <div className="absolute top-[109px] left-0 right-0 bottom-0 flex flex-col md:flex-row w-full h-[756px]">
              {/* Left Content */}
              <div className="flex flex-col gap-[38px] justify-start items-center w-full md:w-1/2 px-[80px] py-[40px]">
                <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                  <h2
                    className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-left text-[#141219]"
                    style={{ fontFamily: "Raleway" }}
                  >
                    Contact Us
                  </h2>
                  <p
                    className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[23px] md:leading-[25px] lg:leading-[27px] text-left bg-gradient-to-r from-[#cd6028] to-[#3e6eb4] bg-clip-text text-transparent w-[42%]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s.
                  </p>
                </div>

                {/* Office Information */}
                <div className="flex flex-col gap-[22px] justify-start items-center w-full">
                  {/* U.S. Office */}
                  <div className="flex flex-col gap-[8px] justify-start items-start w-full">
                    <div className="flex flex-row justify-start items-center w-full">
                      <img
                        src="/img_group_50.svg"
                        alt="Location Icon"
                        className="w-[10px] h-[16px]"
                      />
                      <h3
                        className="text-[16px] font-bold leading-tight text-left text-[#000000] underline ml-[8px]"
                        style={{ fontFamily: "Raleway" }}
                      >
                        U.S. Office
                      </h3>
                    </div>
                    <p
                      className="text-[14px] font-normal leading-tight text-left text-[#000000] whitespace-pre-line"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {
                        "Aadrila Technologies INC,\n8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901."
                      }
                    </p>
                  </div>

                  {/* India Office */}
                  <div className="flex flex-col gap-[8px] justify-start items-start w-full">
                    <div className="flex flex-row justify-start items-center w-full">
                      <img
                        src="/img_group_50.svg"
                        alt="Location Icon"
                        className="w-[10px] h-[16px]"
                      />
                      <h3
                        className="text-[16px] font-bold leading-tight text-left text-[#000000] underline ml-[8px]"
                        style={{ fontFamily: "Raleway" }}
                      >
                        India Office
                      </h3>
                    </div>
                    <p
                      className="text-[14px] font-normal leading-tight text-left text-[#000000] w-[42%] whitespace-pre-line"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {
                        "Aadrila Technologies Private Limited,\nUnit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053."
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Contact Form */}
              <div className="w-full md:w-1/2 mr-[80px]">
                <div className="bg-[#ffffff] rounded-[20px] px-[50px] py-[80px] shadow-[0px_0px_20px_#0000001e] h-full">
                  <div className="flex flex-col gap-[24px] justify-center items-center w-full h-full">
                    <div className="flex flex-col gap-[24px] justify-start items-center w-full">
                      {/* First Row */}
                      <div className="flex flex-col md:flex-row gap-[24px] justify-start items-center w-full">
                        <EditText
                          placeholder="Full Name"
                          text_font_size="text-base"
                          text_font_family="Manrope"
                          text_font_weight="font-light"
                          text_line_height="leading-relaxed"
                          text_text_align="center"
                          text_color="text-text-light"
                          fill_background_color="bg-background-primary"
                          border_border="border solid"
                          border_border_radius="rounded-md"
                          padding="pt-[14px] pr-[24px] pb-[14px] pl-[24px]"
                          layout_width="full"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                        />
                        <EditText
                          placeholder="Email"
                          text_font_size="text-base"
                          text_font_family="Manrope"
                          text_font_weight="font-light"
                          text_line_height="leading-relaxed"
                          text_text_align="center"
                          text_color="text-text-light"
                          fill_background_color="bg-background-primary"
                          border_border="border solid"
                          border_border_radius="rounded-md"
                          padding="pt-[14px] pr-[24px] pb-[14px] pl-[24px]"
                          layout_width="full"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                      </div>

                      {/* Second Row */}
                      <div className="flex flex-col md:flex-row gap-[24px] justify-start items-center w-full">
                        <EditText
                          placeholder="Phone Number"
                          text_font_size="text-base"
                          text_font_family="Manrope"
                          text_font_weight="font-light"
                          text_line_height="leading-relaxed"
                          text_text_align="center"
                          text_color="text-text-light"
                          fill_background_color="bg-background-primary"
                          border_border="border solid"
                          border_border_radius="rounded-md"
                          padding="pt-[14px] pr-[24px] pb-[14px] pl-[24px]"
                          layout_width="full"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            handleInputChange("phoneNumber", e.target.value)
                          }
                        />
                        <EditText
                          placeholder="Company Name"
                          text_font_size="text-base"
                          text_font_family="Manrope"
                          text_font_weight="font-light"
                          text_line_height="leading-relaxed"
                          text_text_align="center"
                          text_color="text-text-light"
                          fill_background_color="bg-background-primary"
                          border_border="border solid"
                          border_border_radius="rounded-md"
                          padding="pt-[14px] pr-[24px] pb-[14px] pl-[24px]"
                          layout_width="full"
                          value={formData.companyName}
                          onChange={(e) =>
                            handleInputChange("companyName", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    {/* Inquiry Type Dropdown */}
                    <div className="relative w-full">
                      <EditText
                        placeholder="Inquiry Type"
                        text_font_size="text-base"
                        text_font_family="Manrope"
                        text_font_weight="font-light"
                        text_line_height="leading-relaxed"
                        text_text_align="center"
                        text_color="text-text-light"
                        fill_background_color="bg-[#ffffffa2]"
                        border_border="border solid"
                        border_border_radius="rounded-md"
                        padding="pt-[12px] pr-[40px] pb-[12px] pl-[24px]"
                        layout_width="full"
                        layout_gap="16px"
                        value={formData.inquiryType}
                        onChange={(e) =>
                          handleInputChange("inquiryType", e.target.value)
                        }
                      />
                      <img
                        src="/img_back.svg"
                        alt="Dropdown Arrow"
                        className="absolute right-[24px] top-1/2 transform -translate-y-1/2 w-[16px] h-[12px] pointer-events-none"
                      />
                    </div>

                    {/* Message TextArea */}
                    <TextArea
                      placeholder="Message"
                      text_font_size="text-base"
                      text_font_family="Manrope"
                      text_font_weight="font-light"
                      text_line_height="leading-relaxed"
                      text_text_align="center"
                      text_color="text-text-light"
                      border_border="border solid"
                      border_border_radius="rounded-sm"
                      padding="pt-[12px] pr-[24px] pb-[12px] pl-[24px]"
                      layout_width="full"
                      rows={8}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                    />

                    {/* Submit Button */}
                    <Button
                      text="Send Inquiry"
                      text_font_size="text-base"
                      text_font_family="Raleway"
                      text_font_weight="font-semibold"
                      text_line_height="leading-tight"
                      text_text_align="center"
                      text_color="text-text-white"
                      fill_background_color="bg-primary-background"
                      border_border_radius="rounded-2xl"
                      padding="pt-[16px] pr-[34px] pb-[16px] pl-[34px]"
                      layout_width="full"
                      onClick={handleSubmit}
                      className="hover:bg-blue-700 active:scale-95"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#3e6eb4] px-[80px] py-[78px]">
              <div className="flex flex-col gap-[20px] justify-center items-start">
                <p
                  className="text-[14px] font-normal leading-[20px] text-left text-[#ffffff]"
                  style={{ fontFamily: "Manrope" }}
                >
                  © 2025 by Aadrila Technologies Private Limited CIN
                  U74999UP2017PTC094688
                </p>
                <p
                  className="text-[14px] font-normal leading-tight text-left text-[#ffffff] whitespace-pre-line"
                  style={{ fontFamily: "Manrope" }}
                >
                  {
                    "Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,\nUttar Pradesh, India, 226024"
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
