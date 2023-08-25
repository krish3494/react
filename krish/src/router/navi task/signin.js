import { useNavigate } from "react-router-dom";
export default function Signin()
{

    const navigate = useNavigate()
    const back = () => {
        navigate('/')
    }
    return (
        <>
            Have a nice Day
        <button onClick={back}>Back</button>
        </>
)    
}

