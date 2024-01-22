import TickitNum from "./TickitNum";
import { sum } from "./helper";
export default function Tickit({tickit}){
    return (<div style={sum(tickit)===15 ? {border:"2px solid green",paddingBlockEnd:"30px"}:{border:"2px solid red",paddingBlockEnd:"30px"}}>
        <p>lottery Tickit </p>
        {
            tickit.map((num,idx)=>(
                <TickitNum num={num} key={idx}/>
                ))
        }
    </div>)
}