import { useState } from "react";

export default function Color() {
    let yellow='#ffc800';
    const [bgColor, SetbgColor] = useState(yellow);
    const c = () => {
        SetbgColor("red")
        
    }
       
    


    return (
    
        < >
            <div style={{ background: bgColor }}>
        
                <button onClick={c}>Color</button>
            </div>
        </>
    )

}
