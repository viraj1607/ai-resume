import React, { useContext, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import RichTextEditor from "../custom/RichTextEditor";
import { ResumeInfo } from "@/context/ResumeInfo";
import GlobalApi from "../../../service/GlobalApi";
import { useParams } from "react-router-dom";

const experience = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  // currentlyWorking: false,
  workSummary: "",
};

function Experience() {
  const [experienceList, setExperienceList] = useState([experience]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);
  const params = useParams();

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

  const handleRichTextEditor = (e, name, ind) => {
    const newEntries = experienceList.slice();
    newEntries[ind][name] = e.target.value;
    setExperienceList(newEntries);
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      data: {
        experience: experienceList,
      },
    };
    // console.log("data", data);

    GlobalApi.updateResume(params?.resumeId, data).then(
      (res) => {
        // console.log("hi", res);
        enableNext(true);
        // console.log("test");
        toast("Experience Details Updated");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, experience: experienceList });
  }, [experienceList]);
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
                  <RichTextEditor
                    ind={ind}
                    onChnageRTE={(e) =>
                      handleRichTextEditor(e, "workSummary", ind)
                    }
                  />
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
          <Button onClick={onSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
