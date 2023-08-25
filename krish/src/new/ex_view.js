import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useState } from "react";
import "./ex.css"

export default function Exview()
{

    const [see, setsee] = useState([]);
    
    useeffect(() => {
        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/Krish").then
            ((o) => {
                setsee(o.data)
            })
    }, []);

    const del = (b) => {
        axios.delete(`${API}/${b}`).then(() => {
            axios.get('https://64a79d57dca581464b847a1b.mockapi.io/Krish').then((o) => {
                setsee(o.data);
            })
        }, []);

    }

    


        return (
        
            <>
                <div>
                    <table>
                    <tr>
                    {see.map((b) =>
                
                        <td key={b.id}>{b.Name} <button onClick={() => del(b.id)}>*</button></td>)}
                     {see.map((c) =>
                
                         <td key={b.id}>{b.Age} <button onClick={() => del(b.id)}>*</button></td>)}
                    
                    {see.map((b) =>
                
                        <td key={b.id}>{b.Address} <button onClick={() => del(b.id)}>*</button></td>)}
                    
                    {see.map((b) =>
                
                        <td key={b.id}>{b.Qualification} <button onClick={() => del(b.id)}>*</button></td>)}
                            </tr>

                    </table>
                    
                    
                </div>

                
            </>
        )
    }