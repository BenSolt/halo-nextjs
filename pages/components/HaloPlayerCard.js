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
        p?.Result?.ArenaStats.TotalKills


    const HighestRankAttained =
        p?.Result?.ArenaStats.HighestCsrAttained ?
            p?.Result?.ArenaStats.HighestCsrAttained.Csr : null

    // const HRankAttainedTier =
    // p.Result.ArenaStats.HighestCsrAttained.Tier

    const HRankAttainedDesign =
        p?.Result?.ArenaStats.HighestCsrAttained ?
            p?.Result?.ArenaStats.HighestCsrAttained.DesignationId : null

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
        p?.Result?.ArenaStats.TotalAssassinations
    const Assists =
        p?.Result?.ArenaStats.TotalAssists
    const Deaths =
        p?.Result?.ArenaStats.TotalDeaths

    const GamesLost =
        p?.Result?.ArenaStats.TotalGamesLost
    const GamesWon =
        p?.Result?.ArenaStats.TotalGamesWon
    const GamesTied =
        p?.Result?.ArenaStats.TotalGamesTied

    function example() {
        return condition1 ? value1
            : condition2 ? value2
                : condition3 ? value3
                    : value4;
    }

    return (
        <div className="PlayerCard">

            <div className='Gamertag'>
                {/* GAMER TAG*/}
                <h2> {p?.Id}</h2>
                <h4 className="rankText"> Rank: {p?.Result?.SpartanRank}</h4>
                {/* <h1>{rankcurrent}</h1>  */}
            </div>

            <div className="info">
                <div className="infoText">
                    {HighestRankAttained === null ? (<h4>Highest Rank: 0</h4>) : (<h4>Highest Rank: {HighestRankAttained}</h4>) }
                    {HRankAttainedDesign === null ? (<h4>Highest Desg: 0</h4>) : (<h4>Highest Rank: {HRankAttainedDesign}</h4>) }
                </div>

                {HRankAttainedDesign === 6 ? (
                    <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array00-783f32318c8c49eda0365c5daa50f5b6.png"></img>
                ) : HRankAttainedDesign === 7 ? (
                    <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_top_array01-3755e5127c9c46368e648d58da44390e.png"></img>
                ) : HRankAttainedDesign === null ? (
                    <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/unranked_00-61fca949c33f433ba7e7507d97ff130f.png"></img>
                ) : HRankAttainedDesign === 4 ? (
                    <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png"></img>
                ) : HRankAttainedDesign === 2 ? (
                    <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_silver_array01-b4739333586340bda2eed6099e630f92.png"></img>
                ) : HRankAttainedDesign === 5 ? (
                    <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_diamond_array01-9721d95b267942dcb1edcce6dfc25631.png"></img>
                ) : (
                    <img className="tierCard" src="https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_platinum_array01-c8df3dc366ea49209762f9b08189ffa6.png"></img>
                )
                }
            </div>

            <div className="Stats">
                <div className='textHolder'>
                    <h6 className='textgold'>GAMES WON: {GamesWon}</h6>
                </div>
                <div className='textHolder'>
                    <h6 className='textgold'>GAMES LOST: {GamesLost}</h6>
                </div>
                <div className='textHolder'>
                    <h6 className='textgold'>GAMES TIED: {GamesTied}</h6>
                </div>
            </div>
            <div className="Stats">
                <div className='textHolder'>
                    <h6 className='textgold'>TOTAL KILLS: {TotalKillsPlayer}</h6>
                </div>
                <div className='textHolder'>
                    <h6 className='textgold'>DEATHS: {Deaths}</h6>
                </div>

            </div>

            <div className="Stats">

                <div className='textHolder'>
                    <h6 className='textgold'>ASSASINATIONS: {Assasinations}</h6>
                </div>
                <div className='textHolder'>
                    <h6 className='textgold'>ASSISTS: {Assists}</h6>
                </div>
            </div>

            {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
        </div>

    )
}