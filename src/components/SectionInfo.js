import React from "react";
import styles from "./SectionInfo.module.css";

const SectionInfo = () => {
    return (
        <section className={styles.sectionBanner}>
            <div className={styles.sectionText}>
                <h3>O QUE É O CÂNCER BUCAL?</h3>
                <p>O câncer de boca, também conhecido como câncer oral, é uma doença maligna que afeta as estruturas da cavidade bucal, incluindo lábios, gengivas, bochechas, língua, piso da boca, céu da boca e garganta. Este tipo de câncer pode se desenvolver a partir de células epiteliais presentes nas mucosas bucais e, se não tratado adequadamente, pode se espalhar para outras partes do corpo.</p>

            </div>
            <div>
             <img className={styles.imgBanner} src="images/mouthSick.png" alt="logo" />
            </div>
        </section>
    );
};

export default SectionInfo;
