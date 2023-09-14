import React, { useState } from "react";
import { players } from "~/utils/playerData";

interface Person {
  id: number;
  name: string;
  benched: boolean;
  present: boolean;
}

export function Settings() {
  const [selectedOption, setSelectedOption] = useState("number of courts");
  const [currentlyPresent, setPresent] = useState<Person[]>([]);

  const handleCheckboxChange = (id: number) => {
    console.log("checked!!");
    setPresent((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, present: !person.present } : person
      )
    );
  };

  return (
    <>
      <div>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="option1">1 Court</option>
          <option value="option2">2 Courts</option>
          <option value="option3">3 Courts</option>
        </select>
      </div>
      <div>
        <form>
          <label htmlFor="addPlayer">Add Player:</label>
          <input
            type="text"
            id="addPlayer"
            className="rounded-lg border border-gray-400 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
          <button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Add
          </button>
        </form>
        <div>
          <h2>Who's here??</h2>
        </div>
        <div>
          <ul>
            {players.map((player) => (
              <li key={player.id}>
                {player.name}{" "}
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(player.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
