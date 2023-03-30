import React from "react";

// import HaloRankCard from "../haloRanks/HaloRankCard";



export default function HaloPlayerCard({ p }) {

  // const [rankData, setRankData] = useState([]);
  // const aRank = rankData.filter(str => (str.name === "Bronze"))


  // const TotalKillsVehicle = 
  // p.Result.ArenaStats.DestroyedEnemyVehicles.map(p => {
  //       return(
  //           <div>Kills: {p.TotalKills}</div>    
  //       )
  //  })

  const TotalKillsPlayer =
    p.Result.ArenaStats.TotalKills


  const HighestRankAttained =
    p.Result.ArenaStats.HighestCsrAttained ?
      p.Result.ArenaStats.HighestCsrAttained.Csr : null
  
  // const HRankAttainedTier =
  // p.Result.ArenaStats.HighestCsrAttained.Tier

  const HRankAttainedDesign =
  p.Result.ArenaStats.HighestCsrAttained ?
  p.Result.ArenaStats.HighestCsrAttained.DesignationId : null

  // const HRankAttainedPercent =
  // p.Result.ArenaStats.HighestCsrAttained.PrecentToNextTier

  // const HRankAttainedRank =
  // p.Result.ArenaStats.HighestCsrAttained.Rank

  

  // const rankcurrent =
  //   p.Result.ArenaStats.ArenaPlaylistStats.map(p => {
  //     return (
  //       <div>      
  //         <h5>a:</h5> <h6>{p.PlaylistId}</h6>

  //         {p.MeasurementMatchesLeft}
          
  //         {p.Csr.map(p => {
  //           return (
  //             <div>
  //               <div>Tier: {p.Tier}</div>
  //               <div>Desig Id: {p.DesignationId}</div>
  //               <div>precent: {p.PercentToNextTier}</div>
  //             </div>
  //           )
  //         })}

  //       </div>
  //     )
  //   })

  const Assasinations =
    p.Result.ArenaStats.TotalAssassinations
  const Assists =
    p.Result.ArenaStats.TotalAssists
  const Deaths =
    p.Result.ArenaStats.TotalDeaths

  const GamesLost =
    p.Result.ArenaStats.TotalGamesLost
  const GamesWon =
    p.Result.ArenaStats.TotalGamesWon
  const GamesTied =
    p.Result.ArenaStats.TotalGamesTied


  // console.log(p)
  return (
    <div className="PlayerCard">


      <div className='Gamertag'>
        {/* GAMER TAG*/}
        <h1> {p.Id}</h1> 

        {/* <h1>{rankcurrent}</h1>  */}
      </div>

      <div className="Info">
        <h2>Experience Rank: {p.Result.SpartanRank}</h2>
        <h2>Highest Rank: {HighestRankAttained}</h2>
        <h2>Highest Desg: {HRankAttainedDesign}</h2>


        {/* <img class="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png"></img> */}

        {/* {aRank.map(h => {
                  return < HaloRankCard key={h.id} h={h} />
                })}  */}

      </div>

      <div className="Stats1">
        <div className='Textholder'>
          <h3 className='textgold'>GAMES WON: {GamesWon}</h3>
        </div>
        <div className='Textholder'>
          <h3 className='textgold'>GAMES LOST: {GamesLost}</h3>
        </div>
        <div className='Textholder'>
          <h3 className='textgold'>GAMES TIED: {GamesTied}</h3>
        </div>
        <div className='Textholder'>
          <h3 className='textgold'>DEATHS: {Deaths}</h3>
        </div>
      </div>

      <div className="Stats2">
        <div className='Textholder'>
          <h3 className='textgold'>TOTAL KILLS: {TotalKillsPlayer}</h3>
        </div>
        <div className='Textholder'>
          <h3 className='textgold'>ASSASINATIONS: {Assasinations}</h3>
        </div>
        <div className='Textholder'>
          <h3 className='textgold'>ASSISTS: {Assists}</h3>
        </div>
      </div>


      {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
    </div>

  )
}