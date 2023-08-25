import axios from "axios";
import { useEffect, useState } from "react"



export default function CreateApp()
{
    const [name, setname] = useState('');
    const [view,setview]=useState([])
   
    const form = (event) => {
        event.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi", { Name: name });
        setname('')
       

    };

    useEffect(() => {
        axios.get('https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi').then((s) => {
            setview(s.data);
        })
    },[])
    return (
        <>
            <form onSubmit={form}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                <input type="submit" />
            </form>

            {view.map((ele) => {
                <li>
                    {ele.Name} 
                    <button>Del</button>
                </li>
            })}

            
          
      
        </>
    )
}