import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const FooterLinks = ({ link, customStyles }) => {
  const footerLinkCss = StyleSheet.create(customStyles);
  return (
    <span className={css(styles.root)}>
      {link.label}&nbsp;
      <a href={link.url} target="_blank" className={css(styles.links, footerLinkCss.link)}>
        {link.text}
      </a>
    </span>
  );
};

const styles = StyleSheet.create({
  root: {},
  links: {
    marginRight: '10px'
  }
});

export default FooterLinks;
