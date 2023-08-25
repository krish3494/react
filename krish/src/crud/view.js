import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "./api";

export default function View()
{
    const [see, setsee] = useState([]);

    useEffect(() => {
        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi").then((s) => {
            // console.log(s.data);
            setsee(s.data)
        })
    }, []);

    const del = (a) => {
        axios.delete(`${API}/${a}`).then(() => {
            axios.get('https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi').then((s) => {
                setsee(s.data);
            })
        },[])
}
    return (
        <div>

            {see.map((a) =>
                <li key={a.id}>{a.Name}  <button onClick={() => del(a.id)}>Del</button></li>
              
            )}

            <button>Remove</button>

            
        </div>
    )
}