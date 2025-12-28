// Form Input component
"use client";

import { useEffect } from "react";

type FormInputProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  ariaLabel?: string;
};

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value = "",
  onChange,
  error,
  ariaLabel,
}: FormInputProps) {
  useEffect(() => {
    // Sync with parent value
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
      <label
        htmlFor={name}
        className="font-['DM_Sans',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[15px] sm:text-[16px] md:text-[17px] text-[rgba(255,255,255,0.75)] w-full"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="content-stretch flex gap-[24px] h-[58.372px] items-center px-[23px] py-0 relative rounded-[8px] shrink-0 w-full">
        {/* Background */}
        <div className="absolute bg-[#12171c] border-2 border-[#070f17] border-solid inset-0 rounded-[6px] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]">
          <div className="absolute inset-[-1px] pointer-events-none shadow-[inset_3px_4px_0px_0px_rgba(255,255,255,0.15)]" />
        </div>
        {/* Input */}
        <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0 z-10">
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            aria-label={ariaLabel || label}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${name}-error` : undefined}
            className="bg-transparent border-none outline-none font-['DM_Sans',sans-serif] font-normal leading-[1.2] text-[15px] sm:text-[16px] md:text-[17px] text-[rgba(255,255,255,0.55)] placeholder:text-[rgba(255,255,255,0.55)] w-full"
          />
        </div>
      </div>
      {error && (
        <p
          id={`${name}-error`}
          className="text-red-400 text-sm mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

