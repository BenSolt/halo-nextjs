import React from "react";


export default function HaloMapCard({m}) {
 
    return (
      <div className="Card">
          <h3>{m.name}</h3>
          <img className="MapImage" src={m.imageUrl} alt="map images"/>
          <h6>{m.description}</h6>
          {/* {m.supportedGameModes} */}
           {/* {m.filter(str => (str.supportedGameModes === "Warzone"))} */}
      </div>
    )
}