import React from "react";
import style from "./SelfExam.module.css";

const pageSelfExam = () => {
    const imgExam = [
        { name: "Examinar os lábios", imgSrc: "/images/autoExame/examinarLabios.jpg" },
        { name: "Gengiva frente", imgSrc: "/images/autoExame/gengivaFrente.jpg" },
        { name: "Bochecha", imgSrc: "/images/autoExame/bochecha.jpg" },
        { name: "Garganta e céu da boca", imgSrc: "/images/autoExame/gargantaCeuBoca.jpg" },
        { name: "Embaixo da lingua", imgSrc: "/images/autoExame/embaixoLingua.jpg" },
        { name: "Apalpe a língua", imgSrc: "/images/autoExame/apalparLingua.jpg" },
        { name: "Lingua para o lado", imgSrc: "/images/autoExame/linguaLado.jpg" },
        { name: "Lateral da bochecha", imgSrc: "/images/autoExame/lateralBochecha.jpg" },
        { name: "Apalpe o açoalho", imgSrc: "/images/autoExame/apalparAssoalho.jpg" },
        { name: "Apalpe o pescoço", imgSrc: "/images/autoExame/apalparPescoco.jpg" },
    ];

    const CardExam = ({ imgSrc, name }) => (
        <div className={style.cardExam}>
            <img src={imgSrc} alt={name} className={style.cardImgExam} />
            <p className={style.titleExam}>{name}</p>
        </div>
    );

    return (
        <section className={style.selfExamContainer}>
            <h2 className={style.examTitle}>AUTO EXAME</h2>
            <p className={style.pExam}>As regiões anatômicas mais comum para o câncer de boca são bordas de língua e em sua região inferior, assoalho de boca, lábios inferiores e palato/céu da boca.
            A estratégia de detecção precoce para o câncer de boca recomendada no Brasil é o diagnóstico precoce das lesões suspeitas. Faça esse exame intraoral pelo menos uma vez ao mês. Siga o passo a passo das fotografias abaixo, dura somente 1 minuto e meio!</p>
            <div className={style.containerExam}>
                {imgExam.map((imgExams, index) => (
                    <CardExam key={index} imgSrc={imgExams.imgSrc} name={imgExams.name} />
                ))}
            </div>
        </section>
    );
}

export default pageSelfExam;
