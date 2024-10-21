import React from "react";
import Style from "./Cards.module.css";

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
    <div className={Style.cards}>
      <img src={imgSrc} alt={name} className={Style.icons} />
    </div>
    <p className={Style.title}>{name}</p>
  </li>
);

const Cards = () => {

  return (
    <section className={Style.sectionCard}>
      <h1 className={Style.cardTitle}>Sintomas </h1>
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

export default Cards;
