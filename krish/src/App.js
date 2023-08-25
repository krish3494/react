// import One from "./components/one";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import "./App.css"
// import Log from "./button/log";
// import Color from "./color/color";
// import Count from "./counter/count";
import Create from "./crud/create";
import Edit from "./krishnan/edit";
import Start from "./krishnan/start";
// import Curd1 from "./crud/crud 1";
// import Form from "./form/form";
// import Image from "./image/image";
// import Imgages2 from "./image/image2";
// import Ex from "./new/ex";
// import Samp from "./krishnan/next";
import View from "./krishnan/task/view task";
// import Project from "./Project/proejct1";
// import Pro from "./props/pro";
// import Home from "./router/home";
// import Login from "./router/navi task/login";
// import Navi from "./router/navi task/navitask";
// import Signin from "./router/navi task/signin";

// import Krish from "./setname.js/setname";

// import Setname from "./setname.js/setname";

export default function App()
{
  let obj = [{
    name: "Krish",
    age: 22,
    address: "aaa",
    family: {
      fathername:"ccc",
      mothername:'bbb'},
    qualification:"----",
  }, {
    name:"siva"
  }]
  return (
    <>
      {/* <h1>Hello</h1> */}
      {/* <One /> */}
      {/* <Pro a={obj} />
       <br/> */}
      {/* <Log /> */}
      <br />
      {/* <Krish/> */}

      {/* <Color/> */}

      {/* <Image /> */}
      {/* <Imgages2/> */}
     
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home> }/>
          <Route path="/setname" element={<Krish></Krish>} />
       </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navi />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signin" element={<Signin></Signin>} />
          <Route path="/form" element={<Form></Form>} /> */}
          {/* <Route path="/create" element={<Create></Create>} /> */}
          {/* <Route path="/crud 1" element={<Curd1></Curd1>} /> */}

          <Route path="/updates" element={<Edit/>} />
          
          
         

        </Routes>
      </BrowserRouter>
{/*      
      <Ex />
      <Samp/>
       */}
      {/* <Start/> */}
      
      <View/>
      
    </>
  )
}