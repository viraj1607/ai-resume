import React, { useContext, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ResumeInfo } from "@/context/ResumeInfo";
import { Textarea } from "../ui/textarea";
import GlobalApi from "../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const education = {
  universityName: "",
  startDate: "",
  endDate: "",
  degree: "",
  major: "",
  description: "",
};

function Education({ enableNext }) {
  const [educationList, setEducationList] = useState([education]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);
  const params = useParams();

  const handleChange = (ind, e) => {
    const newEntries = educationList.slice();
    const { name, value } = e.target;
    newEntries[ind][name] = value;
    setEducationList(newEntries);
  };

  const addNewEducation = () => {
    setEducationList([...educationList, education]);
  };

  const removeEducation = () => {
    setEducationList((educationList) => educationList.slice(0, -1));
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      data: {
        education: educationList,
      },
    };
    console.log("data", data);

    GlobalApi.updateResume(params?.resumeId, data).then(
      (res) => {
        console.log("hi", res);
        enableNext(true);
        // console.log("test");
        toast("Education Details Updated");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, education: educationList });
  }, [educationList]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary">
        <h2 className="font-bold text-lg">Education</h2>
        <p>Add your education</p>
        <div>
          {educationList.map((exp, ind) => (
            <div key={ind}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div className="col-span-2">
                  <label className="text-xs">University Name</label>
                  <Input
                    name="universityName"
                    onChange={(e) => handleChange(ind, e)}
                  />
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
                <div>
                  <label className="text-xs">Degree</label>
                  <Input name="degree" onChange={(e) => handleChange(ind, e)} />
                </div>
                <div>
                  <label className="text-xs">Major</label>
                  <Input name="major" onChange={(e) => handleChange(ind, e)} />
                </div>
                <div className="col-span-2">
                  <label className="text-xs">Description</label>
                  <Textarea
                    name="description"
                    onChange={(e) => handleChange(ind, e)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" onClick={addNewEducation}>
              Add more education
            </Button>
            <Button variant="outline" onClick={removeEducation}>
              Remove
            </Button>
          </div>
          <Button onClick={onSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Education;
