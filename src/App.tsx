
import Home  from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import {Store} from "../Store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/notes" element={<Store />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;