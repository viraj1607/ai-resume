import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ResumeCard({ resume }) {
  return (
    <Link to={`/dashboard/resume/${resume.documentId}/edit`}>
      <div>
        <div className="p-14 bg-secondary flex items-center justify-center h-[280px] border rounded-lg cursor-pointer border-black">
          <Notebook />
        </div>
        <h2 className="text-center my-1">{resume.title}</h2>
      </div>
    </Link>
  );
}

export default ResumeCard;
