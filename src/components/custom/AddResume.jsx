import React, { useState } from "react";
import { PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { v4 as uuidv4 } from "uuid";

function AddResume() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  const onCreate = () => {
    const uuid = uuidv4();
    console.log(resumeTitle, uuid);
  };
  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] cursor-pointer"
      >
        <PlusSquare />
      </div>
      <Dialog open={isOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <Input
                onChange={(e) => setResumeTitle(e.target.value)}
                className="mt-2"
                placeholder="Enter title for resume"
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => onCreate()} disabled={!resumeTitle}>
                Create
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
