import { useState } from "react"
import {randomTickitGenarator,sum} from "./helper"
import Tickit from "./Tickit";
export default function Lottery({n,winCondiction}){
    let [tickit,setTickit]= useState(randomTickitGenarator(n));
    let isWining = winCondiction(tickit);
    
    let buyTickit = ()=>{
        setTickit(randomTickitGenarator(n))
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <p>Rules: if your sum of number is 15 You WON!! the lottery</p>
            
            <div>{<Tickit tickit={tickit}/>}</div>
            <button onClick={buyTickit} style={{marginTop:"30px"}}>Get New Tickit</button>
            <h3>{isWining && <h1>You Won!!</h1>}</h3>
        </div>
    )
} 