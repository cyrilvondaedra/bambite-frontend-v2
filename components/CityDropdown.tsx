// City Dropdown component
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type CityDropdownProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

const cities = ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"];

export default function CityDropdown({
  value = "",
  onChange,
  className = "",
}: CityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value);
  const [selectedCity, setSelectedCity] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (city: string) => {
    setSelectedCity(city);
    setSearchTerm(city);
    setIsOpen(false);
    if (onChange) {
      onChange(city);
    }
  };

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      <div className="content-stretch flex flex-col gap-0 h-[40px] items-start relative rounded-[6px] shrink-0 w-full">
        <div className="basis-0 bg-white border border-[#d1d5db] border-solid content-stretch flex grow items-center min-h-px min-w-px px-4 py-[14px] relative rounded-[4px] shrink-0 w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search city"
            className="basis-0 font-['DM_Sans',sans-serif] font-normal grow h-[20px] leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#273b4f] bg-transparent border-none outline-none w-full placeholder:text-[#6a7282]"
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[rgba(0,0,0,0.1)] border-solid content-stretch flex flex-col items-start p-[6px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full z-20 shadow-lg">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => handleSelect(city)}
                className={`content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[3px] shrink-0 w-full text-left hover:bg-[#e6eef2] transition-colors ${
                  selectedCity === city ? "bg-[#e6eef2]" : ""
                }`}
              >
                <p className="basis-0 font-['DM_Sans',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[14px] text-[#273b4f]">
                  {city}
                </p>
                {selectedCity === city && (
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                      <div className="absolute inset-[-13.64%_-9.37%]">
                        <Image
                          src="/checkout-assets/check-icon.svg"
                          alt="Selected"
                          width={16}
                          height={16}
                          className="block max-w-none size-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </button>
            ))
          ) : (
            <div className="p-[8px] text-[14px] text-[#6a7282]">
              No cities found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

