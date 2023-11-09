import AddNote from "./pages/AddNote";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="font-poppins">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddNote />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
