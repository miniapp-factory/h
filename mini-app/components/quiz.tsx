"use client";

import { useState } from "react";
import QuizQuestion from "./quiz-question";
import QuizResult from "./quiz-result";

const questions = [
  {
    question: "What is your favorite activity?",
    options: [
      { text: "Helping others", princess: "cinderella" },
      { text: "Reading books", princess: "belle" },
      { text: "Exploring the sea", princess: "ariel" },
      { text: "Spinning stories", princess: "rapunzel" },
      { text: "Defending honor", princess: "mulan" },
    ],
  },
  {
    question: "Which trait describes you best?",
    options: [
      { text: "Kindness", princess: "cinderella" },
      { text: "Curiosity", princess: "belle" },
      { text: "Adventure", princess: "ariel" },
      { text: "Creativity", princess: "rapunzel" },
      { text: "Bravery", princess: "mulan" },
    ],
  },
  {
    question: "What is your ideal setting?",
    options: [
      { text: "A cozy cottage", princess: "cinderella" },
      { text: "A grand library", princess: "belle" },
      { text: "A coral reef", princess: "ariel" },
      { text: "A tall tower", princess: "rapunzel" },
      { text: "A battlefield", princess: "mulan" },
    ],
  },
  {
    question: "Which song would you sing?",
    options: [
      { text: "A lullaby", princess: "cinderella" },
      { text: "A love ballad", princess: "belle" },
      { text: "A sea shanty", princess: "ariel" },
      { text: "A lullaby with a twist", princess: "rapunzel" },
      { text: "A war anthem", princess: "mulan" },
    ],
  },
  {
    question: "What is your biggest dream?",
    options: [
      { text: "Finding true love", princess: "cinderella" },
      { text: "Discovering knowledge", princess: "belle" },
      { text: "Exploring the world", princess: "ariel" },
      { text: "Finding freedom", princess: "rapunzel" },
      { text: "Protecting my people", princess: "mulan" },
    ],
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    cinderella: 0,
    belle: 0,
    ariel: 0,
    rapunzel: 0,
    mulan: 0,
  });

  const handleSelect = (princess: string) => {
    setScores((prev) => ({ ...prev, [princess]: prev[princess] + 1 }));
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    }
  };

  if (current < questions.length) {
    const q = questions[current];
    return (
      <QuizQuestion
        question={q.question}
        options={q.options}
        onSelect={handleSelect}
      />
    );
  }

  const winner = Object.entries(scores).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0];

  return <QuizResult winner={winner} />;
}
