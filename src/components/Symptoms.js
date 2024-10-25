import React from "react";
import styles from "./Symptoms.module.css";

const icons = [
  {
    name: "Feridas Persistentes",
    imgSrc: "/images/feridasPersistentes.png",
  },
  {
    name: "Manchas Vermelhas ou Brancas",
    imgSrc: "/images/manchasVermelhas.png",
  },
  {
    name: "Inchaço ou Nódulos",
    imgSrc: "/images/inchaco.jpg",
  },
  {
    name: "Dificuldade para Comer ou Mastigar",
    imgSrc: "/images/dificuldadeComer.jpg",
  },
  {
    name: "Dores Persistentes",
    imgSrc: "/images/dorPersistente.jpg",
  },
  {
    name: "Perda de peso inexplicada",
    imgSrc: "/images/perdaPeso.jpg",
  },
];

const Card = ({ imgSrc, name }) => (
  <li>
    <div className={styles.cards}>
      <img src={imgSrc} alt={name} className={styles.icons} />
    </div>
    <p className={styles.title}>{name}</p>
  </li>
);

const Symptoms = () => {

  return (
    <section className={styles.sectionCard}>
      <h1 className={styles.cardTitle}>Sintomas </h1>
      <div>
        <ul>
          {icons.map((icon, index) => (
            <Card
              key={index}
              imgSrc={icon.imgSrc}
              name={icon.name}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Symptoms;
