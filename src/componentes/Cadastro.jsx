import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import styled from "styled-components";
import Logo from "./Logo.jsx";

const servidor = "//127.0.0.1:5000";

export default function Cadastro() {
    let dadosDoCadastro = {nome: null, email: null, senha: null , confirmacao: null}
    
    function cadastrar() {
        function tratarStatus(status){
            console.log(status);
            if(status === 206){
                alert("Todos os campos precisam ser preenchidos!");
            }if(status === 203){
                alert(`Você precisa digitar a mesma senha nos campos "senha" e "confirmar a senha"`);
            }
            if(status === 403){
                alert("Esse email já está cadastrado");
            }
        }

    let requisicao = axios.post(`${servidor}/cadastrar` , dadosDoCadastro);
        requisicao.then(resposta => {
            console.log(`Sucesso na requisição`);
            tratarStatus(resposta.status)
        })
        requisicao.catch(resposta => {
            console.log(`erro na requisição`);
            tratarStatus(resposta.status);
        })
    }

    return(
        <Container>
        <Logo>MyWallet</Logo>
        <Formulario>

            <input placeholder="Nome" onChange={(evento) => {
                dadosDoCadastro.nome = evento.target.value
                }}required>
            </input>

            <input placeholder="Email" type="email" onChange={(evento) => {
                dadosDoCadastro.email = evento.target.value
                }}required>
            </input>

            <input placeholder="Senha" type="password" onChange={(evento) => {
                dadosDoCadastro.senha = evento.target.value
                }}required>
            </input>
            <input placeholder="Confirme a senha" type="password" onChange={(evento) => {
                dadosDoCadastro.confirmacao = evento.target.value
                }}required>
            </input>
            <button onClick={cadastrar}>Cadastrar</button>
        </Formulario>
        <Link to={"/"}>
        <span>Já tem uma conta? Entre agora!</span>
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