import React, { useState, useEffect } from "react";
import { players } from "~/utils/playerData";
import { useRouter } from "next/router";

interface Person {
  id: number;
  name: string;
  benched: boolean;
  present: boolean;
}

export function Settings() {
  const [selectedOption, setSelectedOption] = useState("number of courts");
  const [currentlyPresent, setPresent] = useState<Person[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Initialize the currentlyPresent state with the data from playerData.ts
    setPresent(players);
  }, []);

  const handleCheckboxChange = (id: number) => {
    console.log("checked!!");
    setPresent((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, present: !person.present } : person
      )
    );
  };

  const handleClick = () => {
    console.log("ADDED");

    const inputElement = document.getElementById(
      "addPlayer"
    ) as HTMLInputElement;
    const playerName = inputElement.value.trim();

    if (playerName) {
      const newPlayerId =
        Math.max(0, ...currentlyPresent.map((player) => player.id), -1) + 1;

      const newPlayer: Person = {
        id: newPlayerId,
        name: playerName,
        benched: false, // You can set these to default values if needed
        present: true, // Initialize the new player as present
      };

      setPresent((prevPeople) => [...prevPeople, newPlayer]);
      inputElement.value = "";
    }
  };

  const handleLetsGoClick = async () => {
    // Perform your functions here

    // Redirect to a different page using the router
    await router.push("/");
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
          <option value="option4">4 Courts</option>
          <option value="option5">5 Courts</option>
        </select>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            handleClick();
          }}
        >
          <label htmlFor="addPlayer">Add Player:</label>
          <input
            type="text"
            id="addPlayer"
            className="rounded-lg border border-gray-400 px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit" // Specify the button type as "submit" to trigger the form submission
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Add
          </button>
        </form>
        <div>
          <h2>Who's here??</h2>
        </div>
        <div>
          <ul>
            {currentlyPresent.map((player) => (
              <li key={player.id}>
                {player.name}{" "}
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(player.id)}
                  checked={player.present} // Set the 'checked' attribute based on the 'present' property
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <br></br>
          <button onClick={handleLetsGoClick}>Lets Go!</button>
        </div>
      </div>
    </>
  );
}
