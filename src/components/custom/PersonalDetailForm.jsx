import { ResumeInfo } from "@/context/ResumeInfo";
import React, { useContext } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function PersonalDetailForm({enableNext}) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);
  const handleChange = (e) => {
    enableNext(false)
    const { name, value } = e.target;

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    enableNext(true)
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get started with the basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input required name="firstName" onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input required name="lastName" onChange={handleChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input required name="jobTitle" onChange={handleChange} />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input required name="address" onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input required name="phone" onChange={handleChange} />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input required name="email" onChange={handleChange} />
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
