import React from "react";
import styles from "./SectionInfo.module.css";

const SectionInfo = () => {
    return (
        <section className={styles.sectionBanner}>
            <div className={styles.sectionText}>
                <h3 className={styles.sectionH}>O QUE É O CÂNCER BUCAL?</h3>
                <p>O câncer é o principal problema de saúde pública no mundo, figurando como uma das principais causas de morte. O câncer é uma neoplasia maligna cuja células anormais se dividem incontrolavelmente e se espalham por um tecido ou órgão. Tem como principal característica infiltrar tecidos e causar destruições locais, podendo se espalhar para o corpo todo, o que chamamos de metástases.</p>

            </div>
            <div>
             <img className={styles.imgBanner} src="images/mouthSick.png" alt="logo" />
            </div>
        </section>
    );
};

export default SectionInfo;
