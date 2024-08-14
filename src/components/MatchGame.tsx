import React, { useEffect, useState } from "react";
import { useAppSelector } from '../hooks/store';

type Props = {
    data: {[key: string]: string}
}

export const MatchGame = ( data: Props ) => {
    const [countryList, setCountryList] = useState<String[]>([])
    const stacks = useAppSelector((state) => state.stacks);

    useEffect(() => {
        generateArray()
    }, [])

    function shuffle(array: string[]) {
        for(let i=array.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
    }

    function generateArray() {
        let keys = Object.keys(data.data);
        let values = Object.values(data.data);
        let joinedArrays = keys.concat(values);
        setCountryList(shuffle(joinedArrays))
        console.log(countryList)
    }

    return(
        <>
            <h1>Memory Game</h1>
            <section className="in-game-space">
                {countryList.map(item => (
                    <button className="card-button">{item}</button>
                ))}
            </section>
        </>
    )
}

