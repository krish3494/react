import { useState } from "react"
import "./form.css"
export default function Form()
{
    const [name, setname] = useState('');
    console.log(name);
    const [age, setage] = useState('')
    console.log(age);    
    return (
        <>
            <div>
            <form>
                <h5>Name is :{ name }</h5>
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
                
                <h5>Age:{age}</h5>
                <input type= "number" value={age} onChange={(s)=>setage(s.target.value)}/>
                </form>
                </div>
        </>
    )
}