import FormSection from "@/components/custom/FormSection";
import PreviewSection from "@/components/custom/PreviewSection";
import { ResumeInfo } from "@/context/ResumeInfo";
import dummy from "@/data/dummy";
import React, { useEffect, useState } from "react";

function EditResume() {
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(dummy);
  }, []);
  return (
    <ResumeInfo.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <PreviewSection />
      </div>
    </ResumeInfo.Provider>
  );
}

export default EditResume;
