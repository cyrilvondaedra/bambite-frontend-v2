// Checkout Form Input component
"use client";

import { useState } from "react";

type CheckoutFormInputProps = {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "tel" | "email";
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function CheckoutFormInput({
  label,
  placeholder = "",
  required = false,
  type = "text",
  value = "",
  onChange,
  className = "",
}: CheckoutFormInputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full ${className}`}>
      <p className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[#273b4f] w-full">
        {label}
        {required && " *"}
      </p>
      <div className="content-stretch flex flex-col gap-0 h-[40px] items-start relative rounded-[6px] shrink-0 w-full">
        <div className="basis-0 bg-white border border-[#d1d5db] border-solid content-stretch flex grow items-center min-h-px min-w-px px-4 py-[14px] relative rounded-[4px] shrink-0 w-full">
          <input
            type={type}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            className="basis-0 font-['DM_Sans',sans-serif] font-normal grow h-[20px] leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[#273b4f] bg-transparent border-none outline-none w-full placeholder:text-[#6a7282]"
          />
        </div>
      </div>
    </div>
  );
}

