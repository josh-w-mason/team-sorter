export function Generate() {
  return (
    <div className="flex items-center justify-center">
      <button onClick={handleClick}>Generate match</button>
    </div>
  );
}

export const players = {
  player1: "Player 1",
  player2: "Player 2",
  player3: "Player 3",
  player4: "Player 4",
};

function handleClick() {
  // look up object for active players
  //count how many there are
  //make an array of this length - 1
}
