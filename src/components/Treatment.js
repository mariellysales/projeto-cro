import React from "react";
import style from "./Treatment.module.css";

const Treatment = () => {
    return (
        <section className={style.treatmentContainer}>
            <h2 className={style.treatmentTitle}>TRATAMENTO</h2>
            <p className={style.subTreatment}>O tratamento do câncer de boca varia conforme o estágio da doença e pode incluir:</p>
            <p className={style.pTreatment}><b>Cirurgia:</b> Remoção do tumor e tecidos adjacentes afetados.</p>
            <p className={style.pTreatment}><b>Radioterapia:</b> Uso de radiações para destruir células cancerígenas.</p>
            <p className={style.pTreatment}><b>Quimioterapia:</b> Administração de medicamentos para eliminar células malignas.</p>
            <p className={style.pTreatment}><b>Terapias Alvo e Imunoterapia:</b> Tratamentos avançados que visam especificamente as células cancerosas ou fortalecem o sistema imunológico.</p>
            <p className={style.pTreatment}><b>Reabilitação e Reconstructiva:</b> Procedimentos para restaurar a funcionalidade e aparência após a cirurgia.</p>            
        </section>
    );
}

export default Treatment;