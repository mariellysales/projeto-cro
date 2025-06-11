import React from "react";
import style from "./ScreeningForm.module.css";

const Treatment = () => {
  const formUrl = "https://portal.londrina.pr.gov.br/index.php?option=com_rsform&view=rsform&formId=72";

  const handleRedirect = () => {
    window.open(formUrl, "_blank"); // Abre em uma nova aba
  };

  return (
    <section className={style.treatmentContainer}>
      <div className={style.iframeContainer}>
        <button className={style.redirectButton} onClick={handleRedirect}>
          Faça sua triagem.
        </button>
      </div>
    </section>
  );
};

export default Treatment;
