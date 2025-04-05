import React from "react";

function SkillPreview({ skillData }) {
  return (
    <div className="my-5">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{ color: skillData?.themeColor }}
      >
        Skills
      </h2>
      <hr style={{ borderColor: skillData?.themeColor }} />
      <div className="grid grid-cols-2 gap-3 my-4">
        {skillData?.skills.map((skill, ind) => (
          <div key={ind} className="flex items-center justify-between">
            <h2 className="text-xs">{skill?.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
                <div className="h-2" style={{
                    backgroundColor:skillData?.themeColor,
                    width:skill?.rating+'%'
                }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillPreview;
