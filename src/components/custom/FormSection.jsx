import React, { useState } from "react";
import PersonalDetailForm from "./PersonalDetailForm";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summary from "../form/Summary";
import Experience from "../form/Experience";
import Education from "../form/Education";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [isNext, setIsNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          className="flex gap-2 cursor-pointer"
          size="sm"
        >
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              className="flex gap-2 items-center cursor-pointer"
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            className="flex gap-2 items-center cursor-pointer"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            // disabled={!isNext}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetailForm enableNext={(v) => setIsNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summary enableNext={(v) => setIsNext(v)} />
      ) : activeFormIndex == 3 ? (
        <Experience enableNext={(v) => setIsNext(v)} />
      ) : activeFormIndex == 4 ? (
        <Education enableNext={(v) => setIsNext(v)} />
      ) : null}
    </div>
  );
}

export default FormSection;
