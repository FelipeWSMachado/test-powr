import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Containers from "./Components/Containers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Containers />} />
        <Route exact path="/:id" element={<Containers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
