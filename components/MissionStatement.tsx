// Mission Statement component
type MissionStatementProps = {
  text: string;
};

export default function MissionStatement({ text }: MissionStatementProps) {
  return (
    <div className="relative w-full">
      {/* Three blue diamond bullet points */}
      <div className="absolute flex h-[11.868px] items-center justify-center right-[calc(68.75%+4.23px)] top-[11px] w-[58.896px] hidden sm:block">
        <div className="flex-none rotate-[90deg]">
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

      {/* Mission statement text */}
      <p className="font-['Chillax',sans-serif] leading-[1.2] not-italic text-[20px] sm:text-[24px] md:text-[28px] text-[rgba(255,255,255,0.9)] w-full max-w-[835.762px]">
        {text}
      </p>
    </div>
  );
}

