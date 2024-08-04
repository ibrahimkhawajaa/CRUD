import "./css/index.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './Pages/index.jsx'
import CreateUser from "./Pages/CreateUser.jsx";
import UpdateUser from "./Pages/UpdateUser.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/CreateUser" element={<CreateUser/>}/>
<Route path="/UpdateUser/:id" element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
