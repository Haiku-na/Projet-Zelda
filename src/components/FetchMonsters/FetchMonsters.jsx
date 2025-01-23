import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import Comments from "../Comments/Comments";
export default function FetchMonsters() {
  const [selectedMonster, setSelectedMonster] = useState(null);

  const handleClick = (monster) => {
    setSelectedMonster(selectedMonster === monster ? null : monster);
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/monsters">
        {(data) => (
          <div className="fetch-list">
            {data
              .filter((monster) => monster.name)
              .map((monster) => (
                <div key={monster.id} className="fetch-item">
                  <div className="fetch-item-content">
                    <p className="zelda" onClick={() => handleClick(monster)}>
                      {monster.name}
                    </p>
                    {selectedMonster === monster && (
                      <>
                        <p>{monster.description || "Aucune description disponible."}</p>
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
