import { Link, useNavigate,  } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contextos/UserContext.js";
import styled from "styled-components";
import Logo from "./Logo.jsx";

export default function Login() {
    const navigate = useNavigate();

    const {setUsuario , setIdUsuario , servidor} = useContext(UserContext);
    
    let dadosDoLogin = {email: null, senha: null};

    function logar(){

        function tratarStatus(resposta){
            const {status} = resposta;
            console.log(status);
            if(status === 206){
                alert("Todos os campos precisam ser preenchidos!");
            }if(status === 401){
                alert(`E-mail ou senha incorretos."`);
            }
            if(status === 200){
                setUsuario(resposta.data.usuario);
                setIdUsuario(resposta.data.id)
                console.log("Usuario logado com sucesso!")
                navigate("/home");
            }
        }

    let requisicao = axios.post(`${servidor}/logar` , dadosDoLogin);
        requisicao.then(resposta => {
            console.log(`Sucesso na requisição`);
            tratarStatus(resposta);
        })
        requisicao.catch(resposta => {
            console.log(`erro na requisição`);
            tratarStatus(401);
        })
    }
    return(
        <Container>
            <Logo>MyWallet</Logo>

            <Formulario>
                <input placeholder="Email" type="email" onChange={(evento) => {
                    dadosDoLogin.email = evento.target.value;
                }} required>
                </input>

                <input placeholder="Senha" type="password" onChange={(evento) => {
                    dadosDoLogin.senha = evento.target.value;
                }} required>
                </input>

                <button onClick={logar}>Entrar</button>
            </Formulario>

            <Link to={"/cadastro"}>
                <span>Primeira vez? Cadastre-se!</span>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width = 100%;

    background: pink;
`

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`