import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ResumeInfo } from "@/context/ResumeInfo";
import GlobalApi from "../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import geminiAI from "../../../service/Gemini";

function Summary({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);
  const [summary, setSummary] = useState();
  const params = useParams();

  useEffect(() => {
    summary &&
      setResumeInfo({
        ...resumeInfo,
        summary: summary,
      });
  }, [summary]);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      data: {
        summary: summary,
      },
    };
    GlobalApi.updateResume(params?.resumeId, data).then(
      (res) => {
        console.log("hi", res.data);
        enableNext(true);
        console.log("test");
        toast("Summary Updated");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const generateSummary = async () => {
    const prompt=`Job Title:${resumeInfo.jobTitle}, Based on this job title suggest me the best summary for resume in 4 -5 lines, without any options genearte only one summary `
    const aiSuggestion=await geminiAI(prompt);

    console.log(aiSuggestion)
    setSummary(aiSuggestion)
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary">
      <h2 className="font-bold text-lg">Summary</h2>
      <p>Add Summary for your job title</p>
      <form className="mt-7" onSubmit={onSubmit}>
        <div className="flex justify-between items-end">
          <label>Add Summary</label>
          <Button
            type="button"
            variant="outline"
            className="border-black"
            size="sm"
            onClick={generateSummary}
          >
            Generate using AI
          </Button>
        </div>
        <Textarea
          className="mt-4"
          required
          onChange={(e) => setSummary(e.target.value)}
          value={resumeInfo.summary}
        />
        <div className="mt-2 flex justify-end">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default Summary;
