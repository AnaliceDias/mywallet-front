import styled from "styled-components"
//import axios from "axios"

export default function AdicionarSaida() {

    return(
        <>
        <Topo>
            <h1>
                Nova saída
            </h1>
        </Topo>
        <Formulario>
        <input placeholder="Valor"></input>
        <input placeholder="Descrição"></input>
        </Formulario>
        <button>Salvar entrada</button>
        
        </>
        
    )
}

const Topo = styled.div`
`

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
`