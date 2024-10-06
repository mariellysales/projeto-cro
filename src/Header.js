import './Header.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Header() {

  const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="logo-url.png" alt="Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#symptoms">Sintomas</a></li>
              <li><a href="#Knowledge">Conhecimento</a></li>
              <li><a href="#testimonies">Depoimentos</a></li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </header>
    );
  };
  return (
    <div className="App">
      <Header />
    </div>
  );
}


export default Header;
