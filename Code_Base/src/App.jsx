import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing_Page from "./Pages/Landing_Page";
import Login_Page from "./Pages/Login_Page";
import Student_Dashboard from "./Pages/Student_Dashboard"

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing_Page />} /> */}
      {/* <Route path="/login" element={<Login_Page />} /> */}
      <Route path="/student" element={<Student_Dashboard />} />
    </Routes>
  );
}

export default App;
