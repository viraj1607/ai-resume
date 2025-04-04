import FormSection from "@/components/custom/FormSection";
import PreviewSection from "@/components/custom/PreviewSection";
import React from "react";

function EditResume() {
  return (
    <div className="gird grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <FormSection />
      <PreviewSection />
    </div>
  );
}

export default EditResume;
