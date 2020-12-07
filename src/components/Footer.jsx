import React from 'react';
import drinkIncon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

const linkElement = (imgSrc, linkTestId, url) => (
  <a
    href={ url }
    data-testid={ linkTestId }
    src={ imgSrc }
    alt=""
    style={ { height: '50px', width: '50px' } }
    className="footer-icon"
  >
    <img src={ imgSrc } alt="" />
  </a>
);

function Footer() {
  return (
    <footer data-testid="footer" className="footer-container">
      <section className="footer-icons">
        { linkElement(drinkIncon, 'drinks-bottom-btn', '/bebidas', '/bebidas') }
        { linkElement(exploreIcon, 'explore-bottom-btn', '/explorar', '/explorar') }
        { linkElement(mealIcon, 'food-bottom-btn', '/comidas', '/comidas') }
      </section>
    </footer>
  );
}

export default Footer;
