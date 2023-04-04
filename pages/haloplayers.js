import React, { useEffect, useState } from "react";
//import axios from "axios";
import axiosWithAuth from "./utils/axiosWithAuth";

import HaloPlayerCard from "./components/HaloPlayerCard";
import HaloPlayerCardTest from "./components/HaloPlayerCardTest";

// import NavbarHalo from "../navbar/NavbarHalo";
// import HaloRankCard from "../haloRanks/HaloRankCard";
import Link from 'next/link'
import styles from "../styles/Home.module.css";

export default function Players2() {

    const players = [
        'ACA AC3',
        'AT WILL 2703',
        'Dash MacReady',
        'DePal912',
        'Divine King15',
        'Etherblades89',
        'goopboy123',
        'ImagelessBean',
        'I POLSKA I',
        'I SpiritHope I',
        'Killgear',
        'MATRICKX',
        'mdsolt',
        'Mr DomeFace',
        'muscleman0927',
        'primelos',
        'PaulSolt',
        'Sausag3Tickl3r',
        'S0 HELP ME GOD',
        'thefinaledge',
        'TheMastaChamp',
        'TomASck',
        'VeteranFerret58',
        'Wife H8s Halo',
        'XD marman',
        'Xray Squad 90',
        'Xtianumbra',
    ]

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isLoading) return
    }, [isLoading])

    useEffect(() => {
        axiosWithAuth()
            .get(`https://www.haloapi.com/stats/h5/servicerecords/arena?players=${players}`)
            .then(res => {
                const info = res.data.Results.filter(p =>
                    p.Id.toLowerCase().includes(query.toLowerCase()),
                );
                console.log(res.data.Results);
                setData(info);
                setIsLoading(false);
            });
    }, [query]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <div className={styles.navbarContainer}>
                <Link href="/" className='navItem'>HOME</Link>
            </div>

            <div className="Searchbar" >
                <h3 className='searchtext'>Search Player:</h3>
                <form>
                    <input className="Input"
                        type="text"
                        onChange={handleInputChange}
                        value={query}
                        name="name"
                        placeholder="Search player"
                        autoComplete="off"
                    />
                </form>
            </div>
            <div className="PlayerContainer">
            {isLoading ? (
                    <div><h2>Loading...</h2></div>
                ): (
                <div className="PlayerContainer">
                {data.map(p => {
                    return < HaloPlayerCard key={p.Id} p={p} />
                })}
                </div>
                )}
            </div>
        </div>
    );
}
