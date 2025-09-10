import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './styles.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="123fakturera"
            className='logo-icon'
          />
        </div>
        <nav>
          <NavLink
            to='/terms'
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
          >
            {language === 'en' ? 'Terms' : 'Villkor'}
          </NavLink>
          <NavLink
            to='/pricelist'
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
          >
            {language === 'en' ? 'Pricelist' : 'Prislista'}
          </NavLink>
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={toggleLanguage}
          >
            <img
              src={language === 'en'
                ? 'https://storage.123fakturere.no/public/flags/GB.png'
                : 'https://storage.123fakturere.no/public/flags/SE.png'
              }
              alt={language === 'en' ? 'English' : 'Swedish'}
              className="flag-icon"
            />
          </button>
          <button
            className="hamburger"
            onClick={toggleMenu}
          >
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

    </header>
  )
};

export default Header;
