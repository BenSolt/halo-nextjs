import React from "react";

// import HaloRankCard from "../haloRanks/HaloRankCard";


export default function HaloPlayerCard({ p }) {

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

    return (
        <div className="PlayerCard">

            <div className='Gamertag'>
                {/* GAMER TAG*/}
                <h2 className="rankText"> {p?.Id}</h2>
                <h4 className="rankText"> Rank: {p?.Result?.SpartanRank}</h4>
                {/* <h1>{rankcurrent}</h1>  */}
            </div>

            <div className="info">
                <div className="infoText">
                    {HighestRankAttained === null ? (<h4>Highest Rank: 0</h4>) : (<h4>Highest Rank: {HighestRankAttained}</h4>)}
                    {HRankAttainedDesign === null ? (<h4>Highest Desg: 0</h4>) : (<h4>Highest Desg: {HRankAttainedDesign}</h4>)}
                </div>

                <div>
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
            </div>

            <div className="Stats">
                <h6 className='textgold'>Games Won: {GamesWon}</h6>
                <h6 className='textgold'>Games Lost: {GamesLost}</h6>
            </div>

            <div className="Stats2">
                <h6 className='textgold'>Games Tied: {GamesTied}</h6>
            </div>

            <div className="Stats3">
                <h6 className='textgold'>Total Kills: {TotalKillsPlayer}</h6>
                <h6 className='textgold'>Deaths: {Deaths}</h6>
            </div>

            <div className="Stats">
                <h6 className='textgold'>Assasinations: {Assasinations}</h6>
                <h6 className='textgold'>Assists: {Assists}</h6>
            </div>

            {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
        </div>

    )
}