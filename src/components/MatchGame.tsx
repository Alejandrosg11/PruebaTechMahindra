import { useEffect, useState } from "react";
import { useStackActions } from "../hooks/useStackActions";
import { useAppSelector } from "../hooks/store";

type Props = {
    data: {[key: string]: string}
}

export const MatchGame = ( data: Props ) => {
    const [countryList, setCountryList] = useState<String[]>([])
    const stacks = useAppSelector((state) => state.stacks);
    const { addItemToMain, removeItemFromMain, addItemToSuccess, removeItemFromSuccess, addItemToErrors, removeItemFromErrors } = useStackActions()
    const keys = Object.keys(data.data);
    const values = Object.values(data.data);
    
    useEffect(() => {
        generateArray()
    }, [data])

    function shuffle(array: string[]) {
        for(let i=array.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
    }

    function generateArray() {
        let joinedArrays = keys.concat(values);
        setCountryList(shuffle(joinedArrays))
    }

    function handleClick(x: string) {
        addItemToMain(x)
        if(stacks.mainStack.length === 1) {
            findKey(stacks.mainStack[0])
        }
    }

    function findKey(key:string) {
        console.log(stacks.mainStack)
        if (keys.includes(key)) {
            review(keys.indexOf(key), values.indexOf(stacks.mainStack[1]))
        } else {
            review(keys.indexOf(stacks.mainStack[1]), values.indexOf(key))
        }
    }

    function review(indexOfKey: number, indexOfValue: number) {
        console.log(keys[indexOfKey] + ' - ' + values[indexOfValue])
        console.log(indexOfKey + ' / ' + indexOfValue)
        if(indexOfKey === indexOfValue) {
            addItemToSuccess(indexOfKey.toString())
        } else {
            addItemToErrors(indexOfKey.toString())
        }
        //removeItemFromMain()
    }

    return(
        <>
            <h1>Memory Game</h1>
            <section className="in-game-space">
                {countryList.map(item => (
                    <button onClick={() => handleClick(item.toString())} className="card-button" key={item.toString()}>{item}</button>
                ))}
            </section>
        </>
    )
}

