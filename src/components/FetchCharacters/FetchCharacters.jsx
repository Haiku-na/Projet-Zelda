import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/Home.scss";
import Comments from "../Comments/Comments";
export default function FetchCharacters() {
  const [expandedCharacter, setExpandedCharacter] = useState(null);

  const handleClick = (character) => {
    setExpandedCharacter(expandedCharacter === character ? null : character);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/characters">
        {(data) => (
          <div className="fetch-list">
            {data
              .filter((character) => character.name)
              .map((character) => (
                <div key={character.id} className="fetch-item">
                  <div className="fetch-item-content">
                    <p className="zelda" onClick={() => handleClick(character)}>
                      {character.name}
                    </p>
                    {expandedCharacter === character && (
                      <>
                        <p>{character.description || "Aucune description disponible."}</p>
                        <p><strong>Genre:</strong> {character.gender || "Inconnu"}</p>
                        <p><strong>Race:</strong> {character.race || "Inconnue"}</p>
                        <Comments />
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </ApiFetch>
    </div>
  );
}
