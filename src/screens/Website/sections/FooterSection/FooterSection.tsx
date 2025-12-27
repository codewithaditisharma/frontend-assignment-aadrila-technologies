import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const formFields = [
  { id: "fullName", placeholder: "Full Name", required: true },
  { id: "email", placeholder: "Email", required: true, type: "email" },
  { id: "phone", placeholder: "Phone Number", required: true },
  { id: "company", placeholder: "Company Name", required: false },
];

const offices = [
  {
    icon: "/group-50.png",
    title: "U.S. Office",
    address:
      "Aadrila Technologies INC,\n8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.",
    href: null,
  },
  {
    icon: "/group-50-1.png",
    title: "India Office",
    address:
      "Aadrila Technologies Private Limited,\nUnit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.",
    href: "https://www.aadrila.com",
  },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
}

export const FooterSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      // Show success modal
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = (): void => {
    setShowSuccessModal(false);
  };
  return (
    <section className="relative w-full pt-12 sm:pt-16 md:pt-20 bg-white overflow-hidden">
      <img
        className="absolute w-[21.60%] h-auto top-[-14.97%] left-0 pointer-events-none hidden md:block"
        alt="Group copy"
        src="/group-2-copy-2-4.png"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col gap-6 sm:gap-8 animate-fade-up">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h2 className="font-raleway font-semibold text-[#141219] text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-1.00px] leading-tight sm:leading-tight md:leading-normal">
                Contact Us
              </h2>

              <p className="bg-[linear-gradient(90deg,rgba(205,96,40,1)_11%,rgba(62,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-manrope font-normal text-base sm:text-lg md:text-xl tracking-[0] leading-relaxed sm:leading-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 animate-fade-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="inline-flex items-center gap-2">
                    <img
                      className="w-[11.01px] h-4 object-contain"
                      alt="Location icon"
                      src={office.icon}
                    />
                    {office.href ? (
                      <a
                        className="text-black underline whitespace-nowrap font-raleway font-bold text-sm sm:text-base tracking-[0] leading-normal hover:text-[#3e6eb4] transition-colors duration-200 ease-in-out"
                        href={office.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {office.title}
                      </a>
                    ) : (
                      <div className="text-black whitespace-nowrap font-raleway font-bold text-sm sm:text-base tracking-[0] leading-normal">
                        {office.title}
                      </div>
                    )}
                  </div>
                  <p className="text-black font-manrope font-normal text-xs sm:text-sm tracking-[0] leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <Card className="bg-white rounded-[15px] sm:rounded-[20px] shadow-[0px_0px_20px_#0000001f] border-0 w-full max-w-[600px] hover:shadow-[0px_0px_30px_#0000002f] transition-shadow duration-300 ease-in-out">
              <CardContent className="p-6 sm:p-10 md:p-16 lg:p-20">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {formFields.map((field) => (
                      <div key={field.id} className="flex flex-col">
                        <Input
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          value={formData[field.id as keyof FormData] as string}
                          onChange={(e) =>
                            handleInputChange(
                              field.id as keyof FormData,
                              e.target.value
                            )
                          }
                          className={`h-auto px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-[10px] border border-solid font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base text-center focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out ${
                            errors[field.id as keyof FormData]
                              ? "border-red-500"
                              : "border-[#959595]"
                          }`}
                        />
                        {errors[field.id as keyof FormData] && (
                          <span className="text-red-500 text-xs mt-1 font-manrope">
                            {errors[field.id as keyof FormData]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col">
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        handleInputChange("inquiryType", value)
                      }
                    >
                      <SelectTrigger
                        className={`w-full h-auto px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-[10px] border border-solid font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out ${
                          errors.inquiryType
                            ? "border-red-500"
                            : "border-[#959595]"
                        }`}
                      >
                        <SelectValue placeholder="Inquiry Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.inquiryType && (
                      <span className="text-red-500 text-xs mt-1 font-manrope">
                        {errors.inquiryType}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <Textarea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className={`min-h-[150px] sm:min-h-[180px] md:min-h-[202px] px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-[10px] border border-solid font-manrope font-light text-grey-scalegrey-5 text-sm sm:text-base resize-none focus:border-[#3e6eb4] focus:ring-2 focus:ring-[#3e6eb4]/20 transition-all duration-200 ease-in-out ${
                        errors.message ? "border-red-500" : "border-[#959595]"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1 font-manrope">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-auto px-12 sm:px-16 md:px-20 py-3 sm:py-4 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 active:bg-[#3e6eb4]/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <img
        className="absolute w-[11.43%] h-auto top-[72.19%] right-[16.25%] pointer-events-none hidden lg:block"
        alt="Group"
        src="/group-2-3.png"
      />

      <footer className="w-full bg-[linear-gradient(0deg,rgba(62,110,180,1)_0%,rgba(62,110,180,1)_100%)] p-8 sm:p-12 md:p-16 lg:p-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="flex flex-col gap-4 sm:gap-6">
            <p className="text-white font-manrope font-normal text-xs sm:text-sm tracking-[0] leading-relaxed sm:leading-normal">
              © 2025 by Aadrila Technologies Private Limited CIN
              U74999UP2017PTC094688
            </p>

            <p className="text-white font-manrope font-normal text-xs sm:text-sm tracking-[0] leading-relaxed sm:leading-normal">
              Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow,
              Lucknow,
              <br />
              Uttar Pradesh, India, 226024
            </p>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-[20px] shadow-2xl p-6 sm:p-8 md:p-10 max-w-md w-full mx-4 animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="font-raleway font-semibold text-[#141219] text-xl sm:text-2xl mb-2">
                  Inquiry Saved Successfully!
                </h3>
                <p className="font-manrope font-normal text-[#696969] text-sm sm:text-base">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
              <Button
                onClick={closeModal}
                className="w-full sm:w-auto px-8 sm:px-12 py-3 bg-[#3e6eb4] hover:bg-[#3e6eb4]/90 rounded-[160px] font-raleway font-semibold text-white text-sm sm:text-base transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3e6eb4] focus:ring-offset-2"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
