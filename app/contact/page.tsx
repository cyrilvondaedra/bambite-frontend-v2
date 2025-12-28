// Contact Page
"use client";

import { useState } from "react";
import ContactBackground from "@/components/ContactBackground";
import ContactFormInput from "@/components/ContactFormInput";
import ContactInfoSection from "@/components/ContactInfoSection";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // TODO: Add API call to submit form
  };

  const contactReasons = [
    "General Inquiry",
    "Product Question",
    "Collaboration",
    "Feedback",
    "Other",
  ];

  return (
    <ContactBackground>
      <div className="relative w-full min-h-screen">
        {/* Main Content */}
        <div className="relative z-10 pt-[198.74px] pb-16 px-4 sm:px-6 lg:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Section - Form */}
              <div className="w-full lg:w-[518px] flex-shrink-0">
                <div className="content-stretch flex flex-col gap-[83px] items-end overflow-x-clip overflow-y-auto px-0 py-[48px]">
                  {/* Intro Text */}
                  <div className="h-auto relative shrink-0 w-full">
                    <div className="flex h-[11.868px] items-center justify-center left-0 top-[12px] w-[58.896px] mb-4">
                      <div className="flex-none rotate-90">
                        <div className="gap-[16.96px] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(2,_fit-content(100%))] inline-grid relative">
                          <div className="[grid-area:1_/_1] flex h-[24.038px] items-center justify-center relative shrink-0 w-[11.868px]">
                            <div className="flex-none rotate-[63.724deg] skew-x-[31.302deg]">
                              <div className="bg-[#1e6cad] rounded-[1.783px] size-[13.404px]" />
                            </div>
                          </div>
                          <div className="[grid-area:2_/_1] flex h-[24.038px] items-center justify-center relative shrink-0 w-[11.868px]">
                            <div className="flex-none rotate-[63.724deg] skew-x-[31.302deg]">
                              <div className="bg-[#1e6cad] rounded-[1.783px] size-[13.404px]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-['Chillax_Variable',sans-serif] font-medium leading-[1.2] not-italic text-[24px] sm:text-[26px] md:text-[28px] text-[#273b4f] w-full">
                      We're Here for You. Questions about our products, locations, or collaborations? Send us a message and our support team — guided by smart tech and warm hearts — will respond shortly. The future of flavour starts with a conversation.
                    </p>
                  </div>

                  {/* Form Section */}
                  <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                    <p
                      className="bg-clip-text bg-gradient-to-b font-['Chillax_Variable',sans-serif] from-[#1b232a] leading-[0.89] not-italic relative shrink-0 text-[28px] sm:text-[30px] md:text-[32px] to-[#315273] w-full"
                      style={{ WebkitTextFillColor: "transparent" }}
                    >
                      Reach us here
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                    >
                      <ContactFormInput
                        label="Name"
                        placeholder="Name"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(value) =>
                          setFormData({ ...formData, name: value })
                        }
                      />

                      <ContactFormInput
                        label="Email"
                        placeholder="Email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(value) =>
                          setFormData({ ...formData, email: value })
                        }
                      />

                      <ContactFormInput
                        label="Reason of contact"
                        placeholder="Select reason of contact"
                        required
                        type="select"
                        options={contactReasons}
                        value={formData.reason}
                        onChange={(value) =>
                          setFormData({ ...formData, reason: value })
                        }
                      />

                      <ContactFormInput
                        label="Message"
                        placeholder="Message"
                        type="textarea"
                        value={formData.message}
                        onChange={(value) =>
                          setFormData({ ...formData, message: value })
                        }
                      />

                      <button
                        type="submit"
                        className="bg-gradient-to-b border border-[#193551] border-solid content-stretch flex from-[#074980] h-[58px] items-center relative to-[#172743] rounded-lg px-6 mt-4"
                      >
                        <div className="absolute contents inset-[-0.5px_-0.5px_calc(0%-0.5px)_-0.5px]">
                          <div className="absolute inset-[0_0_0_0.57%] mix-blend-overlay opacity-30">
                            <Image
                              src="/product-assets/metal-overlay.png"
                              alt=""
                              fill
                              sizes="200px"
                              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                            />
                          </div>
                        </div>
                        <p className="font-['Space_Mono',sans-serif] font-bold leading-none not-italic relative text-[13px] text-white uppercase z-10">
                          Send Message
                        </p>
                      </button>
                    </form>
                  </div>

                  {/* Contact Info Section */}
                  <ContactInfoSection />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="relative z-10 pb-8 px-4 sm:px-6 lg:px-0">
          <div className="max-w-7xl mx-auto">
            <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] text-[12px] text-[rgba(21,32,43,0.55)] w-full lg:w-[518px]">
              © BamBite, 2026. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </ContactBackground>
  );
}

