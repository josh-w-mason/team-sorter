import React, { useState } from "react";
import { generator } from "~/utils/randomArrayGenerator";

interface GenerateProps {
  onDataGenerated: (data: number[] | undefined) => void;
}

export function Generate({ onDataGenerated }: GenerateProps) {
  const handleClick = () => {
    generator.generateNextPermutation();
    const players = generator.getAllPermutations();
    onDataGenerated(players[0]);
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={handleClick}>Generate match</button>
    </div>
  );
}
