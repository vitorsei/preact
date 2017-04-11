import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { clr } from '../../styles/settings';
import { link } from '../../styles/base.elements';
import FooterLinks from './footer-links';


const Footer = ({ footerLinks }) => {
  return (
    <footer className={css(styles.root)}>
      <div className={css(styles.logo)}>
      </div>
      <div className={css(styles.terms)}>
        {footerLinks.links.map((item) =>
          <FooterLinks key={item.text} link={item} customStyles={footerLinks.css}/>
        )}
      </div>
    </footer>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'block',
    textAlign: 'center',
    color: clr.footerText,
    fontSize: '1.1rem',
    width: '100%'
  },
  logo: {
    background: 'url(/assets/images/pureprofile.png) center no-repeat',
    backgroundSize: 'contain',
    width: '100px',
    height: '26px',
    display: 'inline-block'
  },
  terms: {
    background: clr.footer,
    padding: '0.6rem',
    width: '100%'
  },
  link
});

export default Footer;
