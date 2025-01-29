import React from "react";
import style from "./Treatment.module.css";

const treatments = [
  {
    title: "Cirurgia",
    description: "Remoção do tumor e tecidos adjacentes afetados.",
    img: "/images/treatment/cirurgia.jpg",
    alt: "Cirurgia",
  },
  {
    title: "Radioterapia",
    description: "Uso de radiações para destruir células cancerígenas.",
    img: "/images/treatment/radioterapia.jpg",
    alt: "Radioterapia",
  },
  {
    title: "Quimioterapia",
    description:
      "Administração de medicamentos para eliminar células malignas.",
    img: "/images/treatment/quimioterapia.jpg",
    alt: "Quimioterapia",
  },
  {
    title: "Terapias Alvo",
    description:
      "Tratamento que atinge diretamente os pontos fracos das células do câncer, ajudando a parar seu crescimento.",
    img: "/images/treatment/terapias-alvo.jpg",
    alt: "Terapias Alvo",
  },
  {
    title: "Imunoterapia",
    description:
      "Fortalece as defesas naturais do corpo para ajudar a combater o câncer.",
    img: "/images/treatment/imunoterapia.jpg",
    alt: "Imunoterapia",
  },
  {
    title: "Reabilitação e Reconstructiva",
    description:
      "Procedimentos para restaurar a funcionalidade e aparência após a cirurgia.",
    img: "/images/treatment/reabilitacao.jpg",
    alt: "Reabilitação e Reconstructiva",
  },
];

const Treatment = () => {
  return (
    <section className={style.treatmentContainer}>
      <h2 className={style.treatmentTitle}>TRATAMENTO</h2>
      <p className={style.subTreatment}>
        O tratamento do câncer de boca varia conforme o estágio da doença e pode
        incluir:
      </p>
      <div className={style.treatmentGrid}>
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className={`${style.treatmentItem} ${
              index % 2 === 0 ? style.leftAlign : style.rightAlign
            }`}
          >
            <h3>{treatment.title}</h3>

            <img
              className={style.treatmentImg}
              src={treatment.img}
              alt={treatment.alt}
            />

            <p>{treatment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treatment;
