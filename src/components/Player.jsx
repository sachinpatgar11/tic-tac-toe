import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((edit) => !edit);
  }
  function handlePlayerName(e) {
    setPlayerName(e.target.value);
  }

  let nameRef, editRef;
  if (isEditing) {
    nameRef = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );
    editRef = "Save";
  } else {
    nameRef = playerName;
    editRef = "Edit";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{nameRef}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{editRef}</button>
    </li>
  );
};

export default Player;
