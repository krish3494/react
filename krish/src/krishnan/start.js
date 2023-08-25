import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../crud/api";

export default function Start()
{
    const [name, setname] = useState('');
    const [see, setsee] = useState([]);
    const store = (event) => {
        event.preventDefault();
        axios.post('https://64a79d57dca581464b847a1b.mockapi.io/Krish', { name: name});
        setname('');
    }

    useEffect(() => {
        axios.get('https://64a79d57dca581464b847a1b.mockapi.io/Krish').then((s) => {
            setsee(s.data);
        
        })  
    }, [])
    
    const del = (a) => {
        axios.delete(`${API}/${a}`).then(() => {
            axios.get('https://64a79d57dca581464b847a1b.mockapi.io/Krish').then((s) => {
                setsee(s.data);
            })
        })
    }
    return (
        <>
            <form onSubmit={store}>
                <input type="text" value={name} onChange={ (e)=>setname(e.target.value) } />
                <input type="submit"/>
            </form>

            {see.map((set) =>
                <li>
                    {set.name}  <button onClick={()=>del(set.id)} className="btn">*</button>
                </li>
            )}
        </>
    )
}