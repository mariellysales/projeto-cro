import React from "react";
import style from "./Treatment.module.css";

const treatments = [
  {
    description: "Remoção do tumor e tecidos adjacentes afetados.",
    img: "/images/cirurgia.png",
    alt: "Cirurgia",
  },
  {
    description: "Uso de radiações para destruir células cancerígenas.",
    img: "/images/radioterapia.png",
    alt: "Radioterapia",
  },
  {
    description:
      "Administração de medicamentos para eliminar células malignas.",
    img: "/images/quimioterapia.png",
    alt: "Quimioterapia",
  },
  {
    description:
      "Tratamento que atinge os pontos fracos das células do câncer, ajudando a parar seu crescimento.",
    img: "/images/terapias-alvo.png",
    alt: "Terapias Alvo",
  },
  {
    description:
      "Fortalece as defesas naturais do corpo para ajudar a combater o câncer.",
    img: "/images/imunoterapia.png",
    alt: "Imunoterapia",
  },
  {
    description:
      "Procedimentos para restaurar a funcionalidade e aparência após a cirurgia.",
    img: "/images/reabilitacao.png",
    alt: "Reabilitação",
  },
];

const Treatment = () => {
  return (
    <section className={style.treatmentContainer}>
      <h2 className={style.treatmentTitle}>TRATAMENTO</h2>
      <div className={style.treatmentGrid}>
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className={`${style.treatmentItem} ${
              index % 2 === 0 ? style.leftAlign : style.rightAlign
            }`}
          >
            <img
              className={style.treatmentImg}
              src={treatment.img}
              alt={treatment.alt}
            />
            <div className={style.treatmentDescription}>
              <p>{treatment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treatment;
