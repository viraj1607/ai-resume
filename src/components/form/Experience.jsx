import React, { useContext, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import RichTextEditor from "../custom/RichTextEditor";
import { ResumeInfo } from "@/context/ResumeInfo";
const experience = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  currentlyWorking: false,
  workSummary: "",
};

function Experience() {
  const [experienceList, setExperienceList] = useState([experience]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);

  const handleChange = (ind, e) => {
    const newEntries = experienceList.slice();
    const { name, value } = e.target;
    newEntries[ind][name] = value;
    setExperienceList(newEntries);
  };

  const addNewExperience = () => {
    setExperienceList([...experienceList, experience]);
  };

  const removeExperience = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };

  const handleRichTextEditor=(e,name,ind)=>{
    const newEntries = experienceList.slice();
    newEntries[ind][name] = e.target.value;
    setExperienceList(newEntries);
  }

  useEffect(()=>{
    setResumeInfo({...resumeInfo,experience:experienceList})
  },[experienceList])
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your job experience</p>
        <div>
          {experienceList.map((exp, ind) => (
            <div key={ind}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input name="title" onChange={(e) => handleChange(ind, e)} />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(e) => handleChange(ind, e)}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input name="city" onChange={(e) => handleChange(ind, e)} />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input name="state" onChange={(e) => handleChange(ind, e)} />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(e) => handleChange(ind, e)}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(e) => handleChange(ind, e)}
                  />
                </div>
                {/* <div className="col-span-2">
                  <label className="text-xs">Position Title</label>
                  <Input name="title" onChange={(e) => handleChange(ind, e)} />
                </div> */}
                <div className="col-span-2">
                  <RichTextEditor ind={ind} onChnageRTE={(e)=>handleRichTextEditor(e,"workSummary",ind)}/>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" onClick={addNewExperience}>
              Add more experience
            </Button>
            <Button variant="outline" onClick={removeExperience}>
              Remove
            </Button>
          </div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
