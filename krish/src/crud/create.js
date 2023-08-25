import axios from "axios";
import { useState } from "react"
import CreateApp from "../crudApplicatuion/createApp";
import View from "./view";


export default function Create()
{
    const [name, setname] = useState('')
   
    const form = (event) => {
        event.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi", { Name: name });
        setname('')
       

    }
    return (
        <>
            <form onSubmit={form}>
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                <input type="submit" />
            </form>

            <View />
            
            <CreateApp/>
      
        </>
    )
}