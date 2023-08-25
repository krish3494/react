import { useNavigate } from "react-router-dom";
export default function Home()
{
    const navigate=useNavigate()
    const count = () => {
        navigate('/setname')
    }
    return (
        <>
            <h1>This is home</h1>
            <button onClick={count}>Goto Nextpage</button>
        </>
    )
}