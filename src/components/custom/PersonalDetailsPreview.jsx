import React from "react";

function PersonalDetailsPreview({ personalData }) {
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{ color: personalData?.themeColor }}
      >
        {personalData?.firstName} {personalData?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {personalData?.jobTitle}
      </h2>
      <h2 className="text-center font-normal text-xs">
        {personalData?.address}
      </h2>
      <div className="flex justify-between">
        <h2
          className="font-normal text-xs"
          style={{ color: personalData?.themeColor }}
        >
          {personalData?.phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{ color: personalData?.themeColor }}
        >
          {personalData?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{ borderColor: personalData?.themeColor }}
      />
    </div>
  );
}

export default PersonalDetailsPreview;
