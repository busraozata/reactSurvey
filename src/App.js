import "./styles/index.scss";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import LastPage from "./components/Home/LastPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lastpage" element={<LastPage />} />
      </Routes>
    </>
  );
}

export default App;
