export default function Icone({ respondeu }) {
    return (
        <>
            {respondeu === "sem resposta" && <img data-text="play-btn" src="img/seta_play.png" alt="seta" />}
            {respondeu === "acertou" && <img data-text="zap-icon" src="img/icone_certo.png" alt="lembrou" />}
            {respondeu === "quase" && <img data-text="partial-icon" src="img/icone_quase.png" alt="quase lembrou" />}
            {respondeu === "errou" && <img data-text="no-icon" src="img/icone_erro.png" alt="não lembrou" />}
        </>
    )
}