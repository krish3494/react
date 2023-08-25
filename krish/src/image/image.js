import Imgages2 from './image2';
import img from './robo.png'


export default function Image()
{
    const w = () => {
        console.log();
        document.write({ img })
    }
    return (
    
        <>
        <div>
        <img 
                    src={img} alt="logo"
                    height="100px" width="100px"
        />
            </div>
            <div id='im'>
            <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80' height="250px"/>

            </div>
            <hr />
            

            <button onClick={w}>Image</button>

            <Imgages2/>
        </>
    )
}