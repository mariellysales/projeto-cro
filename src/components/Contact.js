import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contact.module.css';
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
import { FaUserInjured, FaUserCheck } from "react-icons/fa";

function Contact() {
  const navigate = useNavigate();

  const handleTreatmentClick = () => {
    navigate('/tratamento');
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.buttons}>
        <div className={styles.buttonContainer} onClick={handleTreatmentClick}>
          <div className={styles.awarenessButton}>
            <div className={styles.front}>
              <FaUserInjured className={styles.frontIcon} />
            </div>
            <div className={styles.back}>
              <FaUserCheck className={styles.backIcon} />
            </div>
          </div>
          <div className={styles.icon}>
            <p>Tratamento</p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div className={styles.awarenessButton}>
            <div className={styles.front}>
              <BsClipboard className={styles.frontIcon} />
            </div>
            <div className={styles.back}>
              <BsClipboardCheck className={styles.backIcon} />
            </div>
          </div>
          <div className={styles.icon}>
            <p>AGENDAMENTO DE CONSULTA</p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <a href="https://www.cropr.org.br/index.php/contato" target="_blank" rel="noopener noreferrer">
            <div className={styles.awarenessButton}>
              <div className={styles.front}>
                <MdOutlineEmail className={styles.frontIcon} />
              </div>
              <div className={styles.back}>
                <MdEmail className={styles.backIcon} />
              </div>
            </div>
          </a>
          <div className={styles.icon}>
            <p>Fale conosco - CRO-PR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
