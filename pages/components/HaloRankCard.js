import React from "react";


export default function HaloRank({ h }) {

    //Number within Tier (1-6)
    // const aRank = h.tiers.filter(str => (str.id === 1))


    return (
        <div>
            <h2>{h?.name}</h2>
           
            <div className='TierHolder'>
                {/* <img  className='Banner'src={h.bannerImageUrl} /> */}
                {h?.name === 'Onyx' ? (<h4>Onyx starts at 1500</h4>) : null}

                {h?.tiers?.map(h => {
                    return (
                        <div key={h.id}>
                            <img className="Tier" src={h.iconImageUrl} alt="rank images" />
                        </div>
                    )
                })}
            </div>

        </div>

    )
}