import styled from "styled-components"

export default function AdicionarEntrada() {
    return(
        <>
        <Topo>
            <h1>
                Nova entrada
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