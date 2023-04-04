import React, { useEffect, useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";

import HaloRankCard from "./components/HaloRankCard";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

function HaloRanks() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isLoading) return
    }, [isLoading])

    useEffect(() => {
        axiosWithAuth()
            .get('https://www.haloapi.com/metadata/h5/metadata/csr-designations')
            .then(res => {
                const info = res.data
                console.log(info);
                setData(info);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <div className={styles.navbarContainer}>
                <Link href="/" className='navItem'>HOME</Link>
            </div>
            <div>AAA</div>
            
            <div className="PlayerContainer">
                {isLoading ? (
                    <div>Loading...</div>
                ): (
                    <div>
                    {data.map(h => {
                        return < HaloRankCard key={h.id} h={h} />
                    })}
                    </div>
                )}
            </div>
        </div>

    )

};

export default HaloRanks;