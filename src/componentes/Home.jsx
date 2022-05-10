import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contextos/UserContext.js";

export default function Home() {
    const { servidor , usuario , idUsuario} = useContext(UserContext);
    console.log(idUsuario)
    useEffect(() => {
        let requisicao = axios.get(`${servidor}/atividade` , {headers: {id: idUsuario}});
        requisicao.then(resposta => {
        console.log(resposta);
        console.log("sucesso na requisição")
        });
        requisicao.catch(() => {
            console.log("Erro ao carregar transações");
    
        });
    }, [])

    return(
        <Container>
            <Topo>
            <h1>
                Olá, {usuario}
            </h1>
            <button>
                <ion-icon name="exit-outline"></ion-icon>
            </button>
            </Topo>

            <Quadro>
                quadro
                
            </Quadro>
            <Menu>
                <Link to={"/novaentrada"}>
                    <button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Nova entrada
                    </button>
                </Link>
                
                <Link to={"/novasaida"}>
                    <button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Nova saída
                    </button>
                </Link>
                
            </Menu>
            
        </Container>
        
    )
}

const Container = styled.div`
    background: green;
`

const Topo = styled.div`
    display: flex;
    flex-direction: row;
`

const Quadro = styled.div`
    background: pink;
    min-width: 100px;
    min-heigth: 100px;
`
const Menu = styled.div`
`