import React from "react";
import Styles from "./FactorsRisk.module.css";  

const riskFactors = [
    {
        img: "/images/alcoolismo.jpg",
        alt: "Álcool",
        description: "Consumo elevado e frequente de bebidas alcoólicas",
    },
    {
        img: "/images/tabagismo.jpg",
        alt: "Tabaco",
        description: "Uso de cigarros, charutos ou produtos de tabaco",
    },
    {
        img: "/images/dietaPobre.jpg",
        alt: "Dieta pobre",
        description: "Baixa ingestão de frutas e vegetais",
    },
    {
        img: "/images/dna.jpg",
        alt: "DNA",
        description: "Antecedentes familiares que tiveram câncer",
    },
    {
        img: "/images/HPV.jpg",
        alt: "HPV",
        description: "Certas cepas do vírus HPV estão associadas ao câncer oral",
    },
    {
        img: "/images/sol.jpg",
        alt: "Sol",
        description: "Exposição ao Sol, principalmente para os lábios",
    }
];

const FactorsRisk = () => {
    return (
        <>
            <h1 className={Styles.containerTitle}>Fatores de Risco</h1>
            <section className={Styles.container}>
                {riskFactors.map((factor, index) => (
                    <div className={Styles.item} key={index}>
                        <img className={Styles.imgBox} src={factor.img} alt={factor.alt} />
                        <p>{factor.description}</p>
                    </div>
                ))}
            </section>
        </>
    );
};

export default FactorsRisk;
