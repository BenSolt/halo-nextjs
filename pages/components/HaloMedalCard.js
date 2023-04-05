import React from "react";


export default function HaloMedalCard({ m }) {

    return (
        <div className="card">

            <h3>{m?.name}</h3>
            <h6>{m?.description}</h6>

            <div className='spriteholder'>
                <img className="sprite" src={m?.spriteLocation.spriteSheetUri}
                    alt='halo medal images'
                    style={{
                        objectFit: "none",
                        objectPosition: `-${m?.spriteLocation.left}px -${m?.spriteLocation.top}px`
                    }}
                />
            </div>
        </div>
    )
}