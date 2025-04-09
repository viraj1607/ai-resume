import React, { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { Button } from "../ui/button";
import { Brain } from "lucide-react";
import { ResumeInfo } from "@/context/ResumeInfo";
import { toast } from "sonner";
import geminiAI from "../../../service/Gemini";

function RichTextEditor({ onChnageRTE, ind }) {
  const [value, setValue] = useState();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfo);

  const generateWorkSummary = async () => {
    console.log(resumeInfo?.experience,ind)
    if (!resumeInfo?.experience[ind].title) {
      toast("Please add Position Title");
      return;
    } else {
      const prompt = `Job Title:${resumeInfo?.experience[ind].title}, Based on this job title suggest me the best work experience summary for resume in 4 -5 lines, without any options genearte only one summary `;
      const aiSuggestion = await geminiAI(prompt);
      console.log(aiSuggestion);
      setValue(aiSuggestion)
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <label className="text-xs">Summary</label>
        <Button
          variant="outline"
          size="sm"
          className="flx gap-2 border-primary text-primary"
          onClick={generateWorkSummary}
        >
          <Brain />
          Generate Using AI
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChnageRTE(e);
          }}
        >
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting />
            <HtmlButton />
            <Separator />
            <BtnStyles />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
