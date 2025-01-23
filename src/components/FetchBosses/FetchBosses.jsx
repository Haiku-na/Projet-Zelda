import React, { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import "../../pages/Home.scss";
import Comments from "../Comments/Comments";
export default function FetchBosses() {
  const [expandedBoss, setExpandedBoss] = useState(null);

  const toggleBossDetails = (id) => {
    setExpandedBoss((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="fetch-container">
      <ApiFetch url="https://zelda.fanapis.com/api/bosses">
        {(data) => (
          <div className="fetch-list">
            {data
              .filter((boss) => boss.name)
              .map((boss) => (
                <div key={boss.id} className="fetch-item">
                  <div className="fetch-item-content">
                    <p className="zelda" onClick={() => toggleBossDetails(boss.id)}>
                      {boss.name}
                    </p>
                    {expandedBoss === boss.id && (
                      <div className="fetch-item-details">
                        <p>{boss.description || "Aucune description disponible."}</p>
                        <Comments />
                      </div>
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
