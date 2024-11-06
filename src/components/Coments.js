import React from "react";
import styles from "./Coments.module.css";

const Coments = () => {


    const comentsData = [
        { 
            videoUrl: "https://www.youtube.com/embed/BocAIUGc0Sw?si=t1DEIaye911Eenoc",
           text: "Neste vídeo, a Profa. Dra. Thais Gimenez Miniello entrevista o Dr. Paulo César Ribeiro, cirurgião-dentista do Centro de Especialidades Odontológicas da Secretaria Municipal de Saúde de Londrina. Dr. Paulo compartilha sua experiência pessoal com o câncer de boca, detalhando as etapas de detecção, os primeiros sintomas, o diagnóstico e o tratamento. A entrevista oferece uma visão humanizada e educativa, ressaltando a importância do diagnóstico precoce e da prevenção, tornando-se um recurso valioso para a comunidade e profissionais de saúde."
        },
        {
            videoUrl: "https://www.youtube.com/embed/DJoa1p5v2tI?si=q3BjhiM7j148QTpf",
            text: "Assim como os amores e as estações do ano, nossa voz também pode nos deixar... Neste vídeo, conhecemos a história de uma mulher que, ao enfrentar um câncer de laringe, perdeu a voz. Embora a cirurgia tenha salvado sua vida, ela trouxe consequências físicas e emocionais profundas. A grande questão passou a ser como continuar vivendo após essa perda de identidade. A história é um convite para a reflexão e conscientização sobre os desafios e resiliência de quem passa por esse tipo de experiência."
        },
        {
            videoUrl: "https://www.youtube.com/embed/_7d0bPOAe4Q?si=jEDbitWpi3qcJ1Tw",
            text: "Este vídeo destaca as jornadas de transformação de pessoas afetadas pelo câncer, evidenciando o poder das histórias compartilhadas para promover mudanças reais. Com o objetivo de unir corações e mentes, mostramos como o envolvimento de todos – tanto de quem enfrenta a doença quanto de agentes de transformação – pode trazer mudanças significativas. A mensagem central é o fortalecimento da detecção precoce, da prevenção e da inclusão, contribuindo para uma sociedade mais informada e solidária."
        },
    ]

    return (
        <section className={styles.sectionComents}>
            <div className={styles.comentsTitle}>
                <h1>DEPOIMENTOS</h1>
            </div>
            <div className={styles.coments}>
                {comentsData.map((coment, index) => (
                    <div key={index} className={styles.comentWrapper}>
                        <div className={styles.comentIframe}>
                            <iframe
                                src={coment.videoUrl}
                                title={`YouTube video player ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.coment}>
                            <p className={styles.comentText}>{coment.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Coments;