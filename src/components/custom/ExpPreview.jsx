import React from "react";

function ExpPreview({ expData }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: expData?.themeColor }}
      >
        Prfessional Experience
      </h2>
      <hr style={{ borderColor: expData?.themeColor }} />
      {expData?.experience.map((exp, ind) => (
        <div key={ind} className="my-5">
          <h2 className="text-sm font-bold">{exp?.title}</h2>
          <h2 className="text-sx flex justify-between">
            {exp?.companyName}, {exp?.city}, {exp?.state}
            <span>
              {exp?.startDate} -{" "}
              {exp?.currentlyWorking ? "Present" : exp?.endDate}
            </span>
          </h2>
          <p className="text-xs my-2">{exp?.workSummary}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpPreview;
