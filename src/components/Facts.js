import styles from "./Facts.module.css";

const factsData = [
    {
        id: 1,
        imgSrc: "/images/world.png",
        alt: "Gráfico mostrando casos de câncer bucal globalmente",
        text: "380.000 novos casos de câncer bucal no mundo por ano"
    },
    {
        id: 2,
        imgSrc: "/images/brazil.png",
        alt: "Gráfico mostrando casos de câncer bucal no Brasil",
        text: "15.100 casos de câncer de boca no Brasil nos últimos 3 anos."
    },
    {
        id: 3,
        imgSrc: "/images/tape.png",
        alt: "Gráfico mostrando mortes por câncer bucal mundialmente",
        text: "6.192 óbitos em 2020 no Brasil por câncer de boca."
    }
];

function Facts() {
    return (
        <section id="facts" className={styles.factsContainer}>
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
