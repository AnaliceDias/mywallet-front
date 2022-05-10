import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Logo from "./Logo.jsx";

const servidor = "//127.0.0.1:5000";

export default function Login() {
    let rota = "/";
    let dadosDoLogin = {email: null, senha: null};

    function logar(){
        
        function tratarStatus(status){
            console.log(status);
            if(status === 206){
                alert("Todos os campos precisam ser preenchidos!");
            }if(status === 401){
                alert(`E-mail ou senha incorretos."`);
            }
        }

    let requisicao = axios.post(`${servidor}/logar` , dadosDoLogin);
        requisicao.then(resposta => {
            rota="/cadastrar";
            console.log(`Sucesso na requisição`);
            tratarStatus(resposta.status);
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
            <Link to={rota}>
                <button onClick={logar}>Entrar</button>
            </Link>
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