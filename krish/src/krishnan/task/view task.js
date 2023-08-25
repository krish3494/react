import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "./api";

import "./view task.css"

export default function View() {

    const [classname, setclassname] = useState('');
    const [type, settype] = useState('');
    const [hours, sethours] = useState('');
    const [trainee, settrainee] = useState('');

    const [see, setsee] = useState([]);


    const sub = (event) => {
        event.preventDefault();
        axios.post("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi", {
            Classname: classname,
            type: type,
            Hours: hours,
            Trainee: trainee
        });
        setclassname('');
        settype('');
        sethours('');
        settrainee('');
    }

    useEffect(() => {

        axios.get("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi").then
            ((s) => {
                setsee(s.data)
            })
    }, [])

    const del = (a) => {
        
        axios.delete(`${API}/${a}`).then(() => {
            axios.get("https://64a79d57dca581464b847a1b.mockapi.io/myFirstApi").then
                ((s) => {
                    setsee(s.data)
                })
        });


        const ed = (a,b,c,d) => {
            localStorage.setItem('Classname', a);
            localStorage.setItem('type', b);
            localStorage.setItem('Hours', c);
            localStorage.setItem('Trainee', d)

        }
    }

    return (

        <body>

            <h4><b>APPLICATION :</b></h4>

            <form onSubmit={sub}>

                <table>
                    <tr>
                        <td><label>Class Name :</label></td>
                        <td><input type="text" value={classname} onChange={(e) => setclassname(e.target.value)} /></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td><label>Type:</label></td>
                        <td> <input type="text" value={type} onChange={(e) => settype(e.target.value)} /></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td><label>Hours(or)Time :</label></td>
                        <td><input type="time" value={hours} onChange={(e) => sethours(e.target.value)} /></td>
                    </tr>
                    <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td><label>Trainee :</label></td>
                        <td><input type="text" value={trainee} onChange={(e) => settrainee(e.target.value)} /></td>
                    </tr>
                </table>
                <input type="submit" id="btn" />
            </form>
            <table id="form1">
              <tr>
                    <th>Classname</th>
                    <th>type</th>
                    <th>hours</th>
                    <th>Trainee</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                {see.map((tv) =>
                    <tr>
                        <td>{tv.Classname}</td>
                        <td>{tv.type}</td>
                        <td>{tv.Hours}</td>
                        <td>{tv.Trainee}</td>
                        <td>
                            <button onClick={()=>{del(tv.id)}} className="btn">*</button>
                        </td>
                        <td>
                            <button onClick={()=>ed(tv.Classname,tv.type,tv.Hours,tv.Trainee)}>EDIT</button>
                        </td>

                    </tr>
                )}
            </table>

        </body>
    )
}