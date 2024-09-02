import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import AddScreen from "./screens/AddScreen";
import UpdateScreen from "./screens/UpdateScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddScreen />} />
          <Route path="/update/:id" element={<UpdateScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
