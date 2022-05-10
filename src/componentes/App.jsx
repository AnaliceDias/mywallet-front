import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./Login";

export default function App() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
        
        </>
        
    );
}

