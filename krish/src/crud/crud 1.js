import axios from "axios"
import { useState } from "react"
import Crud1View from "./crud1 view";

export default function Curd1()
{

    const [name1, setname1] = useState('')
    const [age, setage] = useState('')
    const [address,setaddress]=useState('')
    const onsumbit = (event1) => {
        event1.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/Krish", {
            Name: name1, Age:age, Address:address
        });
        setname1('');
        setage('');
        setaddress('')

    }



   
    return (
        <div>
           
            <form onSubmit={onsumbit}>
                <table>
                    <tr>
                        <td>
                    <input type="text" value={name1} onChange={(e) => setname1(e.target.value)} /> </td>
                    <br/>
                    <br/>
                    <td>
                    <input type="number" value={age} onchange={(e) => setage(e.target.value)} /></td>
                    <br/>
                    <br />
                    <td>
                            <input type="text" value={address} onchange={(e) => setaddress(e.target.value)} /></td>
                            </tr>
                    <tr>
                        <td>
                            <input type="submit" />
                            </td>
                </tr>
               
                </table>
                </form>
                

                <Crud1View></Crud1View>
        </div>

      

    )
}