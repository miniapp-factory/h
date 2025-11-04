"use client";

import { Share } from "./share";
import { title, url } from "@/lib/metadata";

export default function QuizResult({
  winner,
}: {
  winner: string;
}) {
  const imageMap: Record<string, string> = {
    cinderella: "/cinderella.png",
    belle: "/belle.png",
    ariel: "/ariel.png",
    rapunzel: "/rapunzel.png",
    mulan: "/mulan.png",
  };

  const shareText = `${title} - I am most similar to ${winner.charAt(0).toUpperCase() + winner.slice(1)}! ${url}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold">
        You are most similar to {winner.charAt(0).toUpperCase() + winner.slice(1)}!
      </h2>
      <img
        src={imageMap[winner]}
        alt={winner}
        className="w-48 h-48 object-cover rounded-lg"
      />
      <Share text={shareText} className="mt-4" />
    </div>
  );
}
