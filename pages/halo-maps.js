import React, { useEffect, useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";

import HaloMapCard from "./components/HaloMapCard";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

function HaloMaps() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isLoading) return
    }, [isLoading])

    useEffect(() => {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/maps')
            .then(res => {
                const info = res.data
                console.log(info);
                setData(info);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <div className="navbarContainer">
                <Link href="/" className='navItem'>HOME</Link>
            </div>
            
            <h2 className="title">Halo 5 Maps</h2>

            <div className="MapContainer" >
                <button className='Btn' onClick={() => (console.log('arena'))}>Arena Maps</button>
                <button className='Btn' >Warzone Maps</button>
            </div>
            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="cardContainer">
                        {data.map(m => {
                            return < HaloMapCard key={m.id} m={m} />
                        })}
                    </div>
                )}
            </div>
        </div>
    )
};

export default HaloMaps;