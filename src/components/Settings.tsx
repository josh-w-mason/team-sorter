import React, { useState } from "react";

export function Settings() {
  const [selectedOption, setSelectedOption] = useState("number of courts");

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
      </div>
    </>
  );
}
