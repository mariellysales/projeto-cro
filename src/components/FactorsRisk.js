import React from "react";
import styles from "./FactorsRisk.module.css";  

const riskFactors = [
    {
        img: "/images/fatoresRisco/alcoolismo.jpg",
        alt: "Álcool",
        description: "Consumo elevado e frequente de bebidas alcoólicas",
    },
    {
        img: "/images/fatoresRisco/tabagismo.jpg",
        alt: "Tabaco",
        description: "Uso de cigarros, charutos ou produtos de tabaco",
    },
    {
        img: "/images/fatoresRisco/dietaPobre.jpg",
        alt: "Dieta pobre",
        description: "Baixa ingestão de frutas e vegetais",
    },
    {
        img: "/images/fatoresRisco/DNAcancer.jpg",
        alt: "DNA com câncer",
        description: "Antecedentes familiares que tiveram câncer",
    },
    {
        img: "/images/fatoresRisco/HPV.jpg",
        alt: "HPV",
        description: "Certas cepas do vírus HPV estão associadas ao câncer oral",
    },
    {
        img: "/images/fatoresRisco/exposicaoSol.jpg",
        alt: "Sol",
        description: "Exposição ao Sol, principalmente para os lábios",
    }
];

const FactorsRisk = () => {
    return (
        <>
            <h1 className={styles.containerTitle}>Fatores de Risco</h1>
            <section className={styles.container}>
                {riskFactors.map((factor, index) => (
                    <div className={styles.item} key={index}>
                        <img className={styles.imgBox} src={factor.img} alt={factor.alt} />
                        <p>{factor.description}</p>
                    </div>
                ))}
            </section>
        </>
    );
};

export default FactorsRisk;
