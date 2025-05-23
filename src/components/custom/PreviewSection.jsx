import React, { useContext, useEffect } from "react";
import PersonalDetailsPreview from "./PersonalDetailsPreview";
import { ResumeInfo } from "@/context/ResumeInfo";
import SummaryPreview from "./SummaryPreview";
import ExpPreview from "./ExpPreview";
import EduPreview from "./EduPreview";
import SkillPreview from "./SkillPreview";

function PreviewSection() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);
  useEffect(() => {
    console.log(resumeInfo);
  }, []);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalDetailsPreview personalData={resumeInfo} />
      <SummaryPreview summaryData={resumeInfo} />
      <ExpPreview expData={resumeInfo} />
      <EduPreview eduData={resumeInfo} />
      <SkillPreview skillData={resumeInfo} />
    </div>
  );
}

export default PreviewSection;
