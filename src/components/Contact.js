import React, { useState } from 'react';
import styles from './Contact.module.css';
import ReactCardFlip from 'react-card-flip';
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
import { FaUserInjured, FaUserCheck } from "react-icons/fa";

function Contact() {
  const [isFlipped, setIsFlipped] = useState({
    email: false,
    exam: false,
    service: false,
  });

  function handleMouseEnter(button) {
    setIsFlipped((prev) => ({ ...prev, [button]: true }));
  }

  function handleMouseLeave(button) {
    setIsFlipped((prev) => ({ ...prev, [button]: false }));
  }

  return (
    <div className={styles.contactSection}>
      <div className={styles.buttons}>
        <div className={styles.buttonContainer}>
          <a href="https://www.cropr.org.br/index.php/contato" target="_blank" rel="noopener noreferrer">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped.email}>
              <div
                className={styles.awarenessButton}
                onMouseOver={() => handleMouseEnter('email')}
              >
                <div className={styles.front}>
                  <MdOutlineEmail className={styles.frontIcon} />
                </div>
              </div>
              <div className={`${styles.awarenessButton} ${styles.back}`} onMouseLeave={() => handleMouseLeave('email')}>
                <MdEmail className={styles.backIcon} />
              </div>
            </ReactCardFlip>
          </a>
          <div className={styles.icon}>
            <p>Fale conosco</p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped.exam}>
            <div
              className={styles.awarenessButton}
              onMouseOver={() => handleMouseEnter('exam')}
            >
              <div className={styles.front}>
                <BsClipboard className={styles.frontIcon} />
              </div>
            </div>
            <div className={`${styles.awarenessButton} ${styles.back}`} onMouseLeave={() => handleMouseLeave('exam')}>
              <BsClipboardCheck className={styles.backIcon} />
            </div>
          </ReactCardFlip>
          <div className={styles.icon}>
            <p>Autoexame</p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped.service}>
            <div
              className={styles.awarenessButton}
              onMouseOver={() => handleMouseEnter('service')}
            >
              <div className={styles.front}>
                <FaUserInjured className={styles.frontIcon} />
              </div>
            </div>
            <div className={`${styles.awarenessButton} ${styles.back}`} onMouseLeave={() => handleMouseLeave('service')}>
              <FaUserCheck className={styles.backIcon} />
            </div>
          </ReactCardFlip>
          <div className={styles.icon}>
            <p>Atendimento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
