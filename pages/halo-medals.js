import React, { useEffect, useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";

import HaloMedalCard from "./components/HaloMedalCard";
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
            .get('https://www.haloapi.com/metadata/h5/metadata/medals')
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

            <h2 className="Title">Halo 5 Medals</h2>

            <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <div  className="CardContainer">
                        {data.map(m => {
                            return < HaloMedalCard key={m.id} m={m} />
                        })}
                    </div>
                )}
            </div>
        </div>
    )
};

export default HaloMaps;