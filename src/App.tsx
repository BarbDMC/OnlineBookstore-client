
import Home  from "./pages/Home/Home";
// import { Login } from "../Login/Login";
// import {Notes} from "../Notes/Notes";
// import { NotFound } from "../404/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/notes" element={<Notes />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;