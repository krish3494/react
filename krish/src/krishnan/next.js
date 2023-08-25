import { useEffect, useState } from "react"
import axios from "axios";
import { API } from "../crud/api";

export default function Samp()

{

    const [name, setname] = useState('');
    const [age, setage] = useState(0);
    const [see, setsee] = useState([]);

    const sub = (event) => {
        
        event.prevntDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi", { Name: name, Age: age });
        setname('');
        setage('');
    }
    
    useEffect(() => {
        
        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi").then((s) => {
            setsee(s.data)
        })
    }, []);

    const del = (a) => {

        axios.delete(`${API}/${a}`).then(() => {
            axios.get("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi").then((s) => {
                setsee(s.data);
            })
    
        })
    };

    return (
        
        <form>

            <table onSubmit={sub}>
                <tr>
                    <td><input type="text" value={name} onChange={(e) => setname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><input type="number" value={age} onChange={(e)=>setage(e.target.value) }/></td>
                </tr>
                
                <tr>
                    <td><input type="submit" /></td>
                </tr>
            </table>

          

            <table>
            {see.map((set) => 
                <tr>
                    <td>
                        {set.name} <button className="btn" onClick={()=>del(set.id)}>#</button>
                    </td>
                    {set.age} <button className="btn" onClick={()=>del(set.id)}>#</button>
                </tr>
            )}
            </table>
        </form>
    )
}