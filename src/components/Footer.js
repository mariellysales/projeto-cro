import React from "react";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaClock, FaRegClock } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <p><FaMapMarkerAlt />Endereço: Rua Desembargador Otávio do Amaral, 1088 - Bigorrilho, Curitiba - PR, CEP: 80710-620</p>
                    <p><FaEnvelope />E-mail para contato: contato@cropr.org.br</p>
                    <p><FaWhatsapp />Whatsapp Secretária: (41) 99680-3735 - SOMENTE TEXTO</p>
                    <p><FaPhone />Telefone para contato: +55 (41) 3025-9500</p>
                    <p><FaRegClock />Horário de atendimento: Segunda a Sexta: 08:30 às 17:30</p>
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
