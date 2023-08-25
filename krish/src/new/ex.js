

import axios from "axios";
import { useEffect, useState } from "react"
import "./ex.css"
import { API } from "../crud/api";


export default function Ex()

{

    const [valuename, setname] = useState('');
    const [age, setage] = useState('');
    const [address, setaddress] = useState('');
    const [qualification, setqualification] = useState('')
    
    const [views, setviews] = useState([]);


    const form = (event) => {
        event.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/Krish", {
            Name: valuename,
            Age: age,
            Address: address,
            Qualification:qualification

        });
        setname('');
        setage('');
        setaddress('');
        setqualification('')
    }
    
    useEffect(() => {
        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/Krish").then((o) => {
            setviews(o.data)
        })
    },[])


    return (
        

        <body className="body" >
 
            <div class="drop">
              
       <a href="">HOme</a>
           
        <div class="down">
        <form onSubmit={form}>
                <table>
                    <tr>
                        <td><label>Name:</label></td>
                        <td><input type="text" value={valuename} onChange={(v)=>setname(v.target.value)}></input></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr>
                    <td><label>Age:</label></td>
                        <td><input type="text" value={age} onChange={(v)=>setage(v.target.value)}></input></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    
                    <tr>
                    <td><label>Address:</label></td>
                        <td><input type="text" value={address} onChange={(v)=>setaddress(v.target.value)}></input></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr>
                    <td><label>Qualification:</label></td>
                        <td><input type="text" value={qualification} onChange={(v)=>setqualification(v.target.value)}></input></td>
                            </tr>
                            
                            <tr><button>submit</button></tr>
        
                        </table>
                        
          
                         
                        
                        
            </form>  
                </div>
           
  
  </div>
       <ex_view/>
        </body>
    )
}