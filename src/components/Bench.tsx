import React, { useState, useEffect } from "react";

interface CourtProps {
  playerData: number[];
}

export function Bench({ playerData }: CourtProps) {
  const playerNameData = ["Dan", "Dana", "Jeff", "Jess", "Josh", "Jorf"];
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  useEffect(() => {
    // Check if playerData has been provided
    if (playerData.length > 0) {
      // Map playerData to playerNames using the indices

      const lastTwoPlayerData = playerData.slice(-2);
      const mappedNames = lastTwoPlayerData.map(
        (index) => playerNameData[index - 1] ?? ""
      );
      setPlayerNames(mappedNames);
    }
  }, [playerData]);

  console.log(playerNames);
  return (
    <div>
      <h1>BENCH: </h1>
      <ul>
        {playerData.length > 0 &&
          playerNames.map((data) => <li key={data}>{data}</li>)}
      </ul>
    </div>
  );
}
