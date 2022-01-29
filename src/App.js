import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Containers from "./Components/Containers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Containers />} />
        <Route path="/:id" component={<Containers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
