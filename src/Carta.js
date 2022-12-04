import styled from "styled-components"
import Icone from "./Icone"
import Cores from "./style/Cores"

export default function Carta({ numero, abrirCarta, virada, question, answer, respondeu, verResposta, virar }) {

    const { verde, amarelo, vermelho, cinza} = Cores

    function mudarCor() {
        switch (respondeu) {
            default: return cinza
            case "errou": return vermelho
            case "quase": return amarelo
            case "acertou": return verde
        }
    }
    function abrir() {
        if (respondeu === "sem resposta") {
            abrirCarta()
        }
    }

    return (
        <>
            {virada ? (
                <OpenedCard data-text="flashcard">
                    <p data-text="flashcard-text" >{virar ? answer : question}</p>
                    {!virar &&
                        <img data-text="turn-btn" onClick={verResposta} src="img/seta_virar.png" alt="virar" />
                    }
                </OpenedCard>
            ) : (
                <ClosedCard data-text="flashcard" onClick={abrir}>
                    <ClosedCardText color={mudarCor()} respondeu={respondeu}>
                        Pergunta {numero}
                    </ClosedCardText>
                    <Icone
                        respondeu={respondeu}
                    />
                </ClosedCard>
            )}
        </>
    )
}

const OpenedCard = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
const ClosedCard = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ClosedCardText = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
    text-decoration: ${props => props.respondeu === "sem resposta" ? "none" : "line-through"};
`