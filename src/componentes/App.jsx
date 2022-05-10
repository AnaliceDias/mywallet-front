import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdicionarEntrada from "./AdicionarEntrada";
import AdicionarSaida from "./AdicionarSaida";
import Cadastro from "./Cadastro";
import Home from "./Home";
import Login from "./Login";
import { useState } from "react";
import UserContext from "../contextos/UserContext.js";

export default function App() {
    const [usuario , setUsuario] = useState([""]);
    const [atividade , setAtividade] = useState([]);
    const [idUsuario , setIdUsuario] = useState([]);
    const servidor = "//127.0.0.1:5000";

    return(
        <UserContext.Provider value={{servidor , usuario , setUsuario , atividade , setAtividade , idUsuario , setIdUsuario}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home />}/>
                    <Route path="/novaentrada" element={<AdicionarEntrada />}/>
                    <Route path="/novasaida" element={<AdicionarSaida />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        
    );
}

/*
const valoresDoContexto = {rota , pagina};
<Route path={rota} element={pagina} />
;
const [pagina, setPagina] = useState([<Login />]);
*/