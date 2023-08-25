import { useState } from "react"
import img4 from "./solo2.png.webp"
export default function Count()
{
    const [num, setnum] = useState(0)
    const [image,setImage]=useState('')
    const add = () => {
        setnum(num + 1)
        console.log("num");
        setImage(img4)

    
    }

    const less = () => {
        setnum(num-1)
    }

    const reset = () => {
        setnum(0)
        console.log('');
        setImage('')
       
    }

  

    
    return (
        <>

            <img src={image} />
            
            <h2>ButtonClicked Count :{num}</h2>
            <br />
            <br/>
            <button onClick={add}>Add</button>
            <br />
            <br/>
            <button onClick={less}>Less</button>
            <br />
            <br/>
            <button onClick={reset}>Reset</button>

          
            

        </>
    )

    }