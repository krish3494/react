import { useState } from "react";
import img1 from "./logo.svg";
import img2 from "./robo.png"

import img3 from "./solo1.png.jpg";
import img4 from "./solo2.png.webp"
export default function Imgages2()
{

    // const [image,setImage]=useState()
    // const change = () => {
    //     setImage(img2)
    // }

    const [image1, setImage] = useState('')
    const Solo = () => {
        
        setImage(img4)
    }

    const abc = () => {
        setImage(img4)
     }
    return (
        <>
            {/* <img src={image} />
            <button onClick={change}>change</button>
 */}

            <hr />

            <img src={image1}/>
            
            <button onClick={Solo}>Solo</button>

            <hr />
            <img src={img3}/>

        </>

       
    )
}