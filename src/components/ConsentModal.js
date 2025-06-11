import React, { useEffect, useState } from 'react';
import styles from './ConsentModal.module.css';

const ConsentModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = sessionStorage.getItem('formConsent');
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleAgree = () => {
        sessionStorage.setItem('formConsent', 'true');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className={styles.consentModal}>
            <p>
                O formulário disponível neste site é operado por terceiros. Este site não coleta, armazena ou processa os dados enviados por meio deste formulário. Recomendamos que os usuários entrem em contato diretamente com a entidade responsável pelo formulário para obter informações sobre como seus dados serão tratados.
            </p>
            <div className={styles.consentButtons}>
                <a href="/politicas" className={styles.seeMore}>Ver mais</a>
                <button onClick={handleAgree} className={styles.Agree}>Concordo</button>
            </div>
        </div>
    );
};

export default ConsentModal;
