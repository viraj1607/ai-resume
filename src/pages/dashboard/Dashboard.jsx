import AddResume from "@/components/custom/AddResume";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import ResumeCard from "@/components/custom/ResumeCard";

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && getResumes();
  }, [user]);
  const getResumes = () => {
    GlobalApi.getResumeList(user?.primaryEmailAddress?.emailAddress).then(
      (res) => {
        console.log(res.data);
        setResumeList(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating Resume using AI</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((res, ind) => <ResumeCard resume={res} key={ind} /> )}
      </div>
    </div>
  );
}

export default Dashboard;
