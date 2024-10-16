import styles from "./Facts.module.css";

const factsData = [
    {
        id: 1,
        imgSrc: "/images/world.png",
        alt: "Gráfico mostrando casos de câncer bucal globalmente",
        text: "Aproximadamente 380 mil novos casos de câncer bucal são diagnosticados a cada ano no mundo"
    },
    {
        id: 2,
        imgSrc: "/images/brazil.png",
        alt: "Gráfico mostrando casos de câncer bucal no Brasil",
        text: "Aproximadamente 15.190 novos casos de câncer bucal são diagnosticados a cada ano no Brasil"
    },
    {
        id: 3,
        imgSrc: "/images/tape.png",
        alt: "Gráfico mostrando mortes por câncer bucal mundialmente",
        text: "O câncer bucal é responsável por cerca de 177.000 mortes por ano mundialmente"
    }
];

function Facts() {
    return (
        <section className={styles.factsContainer}>
            <h1 className={styles.factsTitle}>Fatos sobre o câncer bucal</h1>

            <div className={styles.factsWrapper}>
                {factsData.map(({id, imgSrc, alt, text }) => (
                    <div className={styles.factBox} key={id}>
                        <div className={styles.factImageContainer}>
                            <img src={imgSrc} alt={alt} className={styles.factImage} />
                        </div>
                        <p className={styles.factText}>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Facts;
