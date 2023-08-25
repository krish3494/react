import axios from "axios";
import { useEffect, useState } from "react"

export default function Crud1view()
{


    const [see, setsee] = useState([]);
    useEffect(() => {
        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/Krish").then(
            (s) => {
                setsee(s.data)
            }
        )
    },[])


    return (
        
        <table>
               <tr> 
                {see.map((a) =>
               
                <td>{a.Name}</td>
                )}
            {see.map((b) =>
                    
                <td>{b.Age}</td>
                 )}
            {see.map((c) =>
                     
                     <td>{c.Address}</td>
                     
                )}

</tr>
           
        </table>
    )
}