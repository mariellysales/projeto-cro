import styles from "./Header.module.css";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-scroll";

function Header() {
  const currentUrl = window.location.href;
  const [showAlert, setShowAlert] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const redirectToUrl = (url) => {
    window.open(url, "_blank");
  };

  const facebookRedirect = () => {
    redirectToUrl(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setShowAlert(true);

    setTimeout(() => {
      redirectToUrl("https://www.instagram.com");
      setShowAlert(false);
    }, 2000);
  };

  const whatsappRedirect = () => {
    redirectToUrl(`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={styles.logo}>
          <img className={styles.imageLogo} src="/images/cro-previne.png" alt="Logo" />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navUl}>
            {["Início", "Conhecimento", "Sintomas", "Auto exame", "Depoimentos", "Fatores de Risco"].map((item, index) => (
              <li className={styles.navLi} key={index}>
                <Link
                  className={styles.navLink}
                  to={item.toLowerCase().replace(/\s+/g, '')}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <div className={styles.navBlock}>
                    {item}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={styles.shareLabelDesktop}>Compartilhe:</p>
          <div className={styles.socialIcons}>
            <button className={`${styles.socialIcon} ${styles.facebook}`} onClick={facebookRedirect}>
              <FaSquareFacebook />
            </button>
            <button className={`${styles.socialIcon} ${styles.instagram}`} onClick={copyToClipboard}>
              <FaInstagram />
            </button>
            <button className={`${styles.socialIcon} ${styles.whatsapp}`} onClick={whatsappRedirect}>
              <FaWhatsapp />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className={styles.mobileOnly}>
            <nav className={styles.navMobile}>
              <ul className={styles.navUlMobile}>
                {["Início", "Conhecimento", "Sintomas", "Auto exame", "Depoimentos", "Fatores de Risco"].map((item, index) => (
                  <li className={styles.navLiMobile} key={index}>
                    <Link
                      className={styles.navLinkMobile}
                      to={item.toLowerCase().replace(/\s+/g, '')}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      <div className={styles.navBlock}>
                        {item}
                      </div>
                    </Link>
                  </li>
                ))}

                <div>
                  <p className={styles.shareLabelMobile}>Compartilhe:</p>
                  <div className={styles.socialIconsMobile}>
                    <button className={`${styles.socialIconMobile} ${styles.facebook}`} onClick={facebookRedirect}>
                      <FaSquareFacebook />
                    </button>
                    <button className={`${styles.socialIconMobile} ${styles.instagram}`} onClick={copyToClipboard}>
                      <FaInstagram />
                    </button>
                    <button className={`${styles.socialIconMobile} ${styles.whatsapp}`} onClick={whatsappRedirect}>
                      <FaWhatsapp />
                    </button>
                  </div>
                  </div>
              </ul>
            </nav>
          </div>
        )}

        {showAlert && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              Link copiado! Redirecionando para o Instagram.
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
