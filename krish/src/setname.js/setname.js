import { useState } from "react";

export default function Krish()

{
    const o = () => {
        console.log("hai");
    }
    const [name, othername] = useState("Krishnan")
    
    const q = () => {
            othername("Kavin")
        
        console.log("hai");
    }
    
    return (
        <>
            <button onClick={o}>submit</button>
            <br />
            <br />
            <button onClick={q}> other Name</button>

            <br />
            {name}
        </>
    )
}