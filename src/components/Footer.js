import React from "react";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaRegClock } from 'react-icons/fa';

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
                <p>
                    &copy; 2024 Equipe de desenvolvimento:
                    <a href="https://www.linkedin.com/in/diego-araujo-souza/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> Diego </a>
                    e
                    <a href="https://www.linkedin.com/in/marielly-sales-937407206" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}> Marielly </a>
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
