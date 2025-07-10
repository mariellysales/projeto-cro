import styles from "./Header.module.css";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
  const currentUrl = window.location.href;
  const [showAlert, setShowAlert] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleBackToMenu = () => {
    navigate("/"); // Redireciona para a página inicial
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
            <li className={styles.navLi}>
              <Link
                className={styles.navLink}
                onClick={handleBackToMenu}
                smooth={true}
                duration={500}
                offset={-80}
              >
                <div className={styles.navBlock}>
                  Voltar ao Menu Inicial
                </div>
              </Link>
            </li>
          </ul>
        </nav>

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

        {menuOpen && (
          <div className={styles.mobileOnly}>
            <nav className={styles.navMobile}>
              <ul className={styles.navUlMobile}>
                <li className={styles.navLiMobile}>
                  <button className={styles.navLinkMobile} onClick={handleBackToMenu}>
                    Voltar ao Menu Inicial
                  </button>
                </li>
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
