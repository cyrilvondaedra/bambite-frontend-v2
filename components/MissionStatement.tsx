// Mission Statement component
type MissionStatementProps = {
  text: string;
};

export default function MissionStatement({ text }: MissionStatementProps) {
  return (
    <div className="relative w-full">
      {/* Mission statement text with blue dots at the start */}
      <div className="flex items-start gap-[16.96px] w-full max-w-full lg:max-w-[835.762px]">
        {/* Two blue diamond bullet points */}
        <div className="shrink-0 flex flex-row gap-[16.96px]">
          <div className="flex h-[24.038px] items-center justify-center w-[11.868px]">
            <div className="flex-none rotate-[153.724deg] skew-x-[31.302deg]">
              <div className="bg-[#1e6cad] rounded-[1.783px] size-[13.404px]" />
            </div>
          </div>
          <div className="flex h-[24.038px] items-center justify-center w-[11.868px]">
            <div className="flex-none rotate-[153.724deg] skew-x-[31.302deg]">
              <div className="bg-[#1e6cad] rounded-[1.783px] size-[13.404px]" />
            </div>
          </div>
        </div>
        <p className="font-['Chillax',sans-serif] leading-[1.2] not-italic text-[20px] sm:text-[24px] md:text-[28px] text-[rgba(255,255,255,0.9)]">
          {text}
        </p>
      </div>
    </div>
  );
}
