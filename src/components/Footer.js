import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/images/footer/prefeitura_logo.png" alt="Logo" className={styles.imageLogo} />
                </div>
                <div className={styles.logo}>
                    <img src="/images/footer/3_semana.png" alt="Logo" className={styles.imageLogo} />
                </div>
                <div className={styles.logo}>
                    <img src="/images/cro.png" alt="Logo" className={styles.imageLogo} />
                </div>
            </div>
            <div className={styles.copy}>
                <div>
                    &copy; 2024 Promovido por:
                </div>
                <div>
                    <a href="https://www.up.edu.br/ecohub/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <img src="/images/logos/ecohub1.png" alt="Ecohub logo" className={styles.footerLogoImage} />
                    </a>
                </div>
                <div>
                    <a href="https://www.up.edu.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <img src="/images/logos/positivo1.png" alt="Positivo logo" className={styles.footerLogoImage} />
                    </a>
                </div>
                <div>
                    Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
