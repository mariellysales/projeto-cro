import React from "react";
import Style from "./Cards.module.css";
import { FaStethoscope } from "react-icons/fa6";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { TfiAgenda } from "react-icons/tfi";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbRibbonHealth } from "react-icons/tb";

const icons = [
  {
    name: "Calendar",
    component: <TfiAgenda className={Style.icons} />,
    link: "#",
  },
  {
    name: "Health",
    component: <FaStethoscope className={Style.icons} />,
    link: "#",
  },
  {
    name: "Teeth",
    component: <LiaTeethOpenSolid className={Style.icons} />,
    link: "#",
  },
  {
    name: "titulo",
    component: <RiMentalHealthFill className={Style.icons} />,
    link: "#",
  },
  {
    name: "titulo",
    component: <TbRibbonHealth className={Style.icons} />,
    link: "#",
  },
];

const Card = ({ icon, name, link }) => (
  <li>
    <div className={Style.cards}>
      <a
        href="{link}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Icon link"
      >
        {icon}
      </a>
    </div>
    <p className={Style.title}>{name}</p>
  </li>
);

const Cards = () => {
  return (
    <section className={Style.sectionCard}>
      <h1 className={Style.cardTitle}> Sobre </h1>
      <div>
        <ul>
          {icons.map((icon, index) => (
            <Card
              key={index}
              icon={icon.component}
              link={icon.link}
              name={icon.name}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
