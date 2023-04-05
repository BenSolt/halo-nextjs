import React from "react";

// import HaloRankCard from "../haloRanks/HaloRankCard";



export default function HaloPlayerCard({ p }) {


    return (
        <div className="playerCard">

            <div className='gamertag'>
                {/* GAMER TAG*/}
                <h2>NAME</h2>
                <h3 className="rankText">Rank: 151</h3>
                {/* <h1>{rankcurrent}</h1>  */}
            </div>

            <div className="Info">
                <h4>Highest Rank: 1653</h4>
                <h4>Highest Desg: 6</h4>
            </div>

            <div className="Stats">
                <div className='textHolder'>
                    <h6 className='textgold'>GAMES WON: 11853</h6>
                </div>
                <div className='textHolder'>
                    <h6 className='textgold'>GAMES LOST: 8454</h6>
                </div>
                <div className='textHolder'>
                    <h6 className='textgold'>GAMES TIED: 122</h6>
                </div>
                {/* <div className='Textholder'>
                    <h6 className='textgold'>DEATHS: 100</h6>
                </div> */}
            </div>

            <div className="Stats">
                <div className='textHolder'>
                    <h6 className='textgold'>TOTAL KILLS: 241230</h6>
                </div>
                    <div className='textHolder'>
                    <h6 className='textgold'>DEATHS: 183807</h6>
                </div>
              
            </div>

            <div className="Stats">
                <div className='textHolder'>
                    <h6 className='textgold'>ASSASINATIONS: 2680</h6>
                </div>
                <div className='textHolder'>
                    <h6 className='textgold'>ASSISTS: 144757</h6>
                </div>
            </div>
            {/* <h6>Total kills Vehic:{TotalKillsV}</h6> */}
        </div>

    )
}