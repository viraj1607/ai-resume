import { ResumeInfo } from "@/context/ResumeInfo";
import React, { useContext, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GlobalApi from "../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function PersonalDetailForm({ enableNext }) {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  //   useEffect(()=>{
  //     console.log(params)
  //   })

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      data: formData,
    };
    GlobalApi.updateResume(params?.resumeId, data).then(
      (res) => {
        enableNext(true);
        toast("Personal Details Updated")
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with the basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input defaultValue={resumeInfo?.firstName} required name="firstName" onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input defaultValue={resumeInfo?.lastName} required name="lastName" onChange={handleChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input defaultValue={resumeInfo?.jobTitle} required name="jobTitle" onChange={handleChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input defaultValue={resumeInfo?.address} required name="address" onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input defaultValue={resumeInfo?.phone} required name="phone" onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input defaultValue={resumeInfo?.email} required name="email" onChange={handleChange} />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" className="cursor-pointer">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetailForm;
