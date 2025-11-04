"use client";

import { Button } from "./ui/button";

export interface Option {
  text: string;
  princess: string;
}

export default function QuizQuestion({
  question,
  options,
  onSelect,
}: {
  question: string;
  options: Option[];
  onSelect: (princess: string) => void;
}) {
  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-xl font-semibold">{question}</h2>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <Button
            key={opt.princess}
            variant="outline"
            onClick={() => onSelect(opt.princess)}
          >
            {opt.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
