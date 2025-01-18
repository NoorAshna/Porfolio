import React from 'react';
import footerImg from '../assets/footer.png';

const Footer = () => {
    return (
        <footer>
          <img src={footerImg} alt="Footer img" className='w-100  border border-secondary' />
        </footer>
    );
};

export default Footer;