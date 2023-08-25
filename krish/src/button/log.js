import { useState } from "react";

export default function Log()
{
    const a = () => {
        console.log("HAI");
    }
    const [name, setname] = useState("krishnan");

    const b = () => {
        setname("siva")
    }
    return (
        <>
            <button onClick={a}>CLICK</button>
            <button>
                <a href="https://www.bing.com/ck/a?!&&p=1d2f1abf1071d154JmltdHM9MTY4NzkxMDQwMCZpZ3VpZD0wMmMzZTM1OS1jNWU2LTY1YTMtMjlhZC1mMmVlYzQ0MDY0MWUmaW5zaWQ9NTIxMw&ptn=3&hsh=3&fclid=02c3e359-c5e6-65a3-29ad-f2eec440641e&psq=react+js&u=a1aHR0cHM6Ly9yZWFjdC5kZXYv&ntb=1" target="_blank">
                    Welcome
                </a>
            </button>
            <hr/>
            <button onClick={b}>Print</button>
            <h1>
                {name}
            </h1>
        </>
    )
}