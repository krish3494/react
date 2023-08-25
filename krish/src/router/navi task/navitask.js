import { useNavigate } from "react-router-dom";
import Project from "../../Project/proejct1";
export default function Navi()
{
    const navitask = useNavigate()
    const login = () => {
        navitask('/login')
       
    }
    const signin = () => {
        navitask('/signin')
    }
    const form = () => {
        navitask('/form')
    }

    return (
        <>
            {/* <center>
            <button>Home</button>
            <br />
            <br />
            <button onClick={login}>Login</button>
            <br />
            <br />
                <button onClick={signin}>Sign in</button>
                
                <br />
                <button onClick={form}>Form</button>
          
            </center> */}
            <Project />
            




            
        </>
    )
}