import React, { useState, useEffect } from "react";

interface CourtProps {
  playerData: number[];
}

export function Court({ playerData }: CourtProps) {
  const playerNameData = [
    "Dan",
    "Dana",
    "Jeff",
    "Jess",
    "Josh",
    "Jorf",
    "Tim",
    "Tom",
    "Term",
  ];
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  useEffect(() => {
    // Check if playerData has been provided
    if (playerData.length > 0) {
      // Map playerData to playerNames using the indices
      const mappedNames = playerData.map(
        (index) => playerNameData[index - 1] ?? ""
      );
      setPlayerNames(mappedNames);
    }
  }, [playerData]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-64 w-64 bg-gray-300">
        <p className="absolute left-0 top-0 m-4">{playerNames[0]}</p>
        <p className="absolute right-0 top-0 m-4">{playerNames[1]}</p>
        <p className="absolute bottom-0 left-0 m-4">{playerNames[2]}</p>
        <p className="absolute bottom-0 right-0 m-4">{playerNames[3]}</p>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          Court 1
        </p>
      </div>
      <div></div>
    </div>
  );
}
