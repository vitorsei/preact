import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { clr, screenSize } from '../../styles/settings';
import { icons, getIcon } from '../../styles/icons';
import { headerHeight } from '../../styles/base.elements';
import { Redirect } from 'react-router-dom';

const Header = (props) => {
  const headerCss = StyleSheet.create(props.customStyles);

  debugger;
  if (props.redirectTo === '/login') {
    return <Redirect to={props.redirectTo}/>;
  }

  return (
    <header className={css(styles.headerRoot, headerCss.headerRoot)}>
      <nav className={css(styles.nav)}>
        <span className={css(headerCss.surveyTitle, styles.hideSmartphone)}>
          {props.campaign.invitation.name}
        </span>
        <ul className={css(styles.nav)}>
          <li className={css(styles.logo)}>
          </li>
          <li className={css(styles.hideSmartphone, styles.hideSmartphone)}>
            <img src="/assets/images/Empty_Avatar_N.png" alt="" className={css(styles.avatar)}/>
          </li>
          <li className={css(styles.hideSmartphone)}>
            <span className={css(styles.userName)}>Hi {props.user.firstName}</span>
          </li>
          <li className={css(styles.pipe, styles.hideSmartphone)}>
          </li>
          <li className={css(styles.hideSmartphone)}>
            <div className={css(styles.balance)}>
              <i className={css(styles.transactionsIcon)}></i>
              {props.data.message}&nbsp;
              <span className={css(styles.balanceValue)}>
              {props.data.currency}{props.user.balance.toFixed(2)}
              </span>
            </div>
          </li>
          <li className={css(styles.close)}>
            <a className={css(styles.closeLink)} onClick={props.onLogout}>
              <i className={css(styles.closeIcon)}></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerRoot: {
    height: headerHeight,
    left: '0',
    right: '0',
    position: 'fixed',
    paddingLeft: '1%',
    zIndex: 99
  },
  nav: {
    height: '100%',
    [screenSize.smartphone]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    [screenSize.desktop]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  logo: {
    [screenSize.smartphone]: {
      display: 'inline-block',
      height: '24px',
      backgroundImage: 'url("/assets/images/pp-sprites-highresv2.png")',
      backgroundSize: '218px',
      backgroundPosition: '3px -670px',
      width: '90px'
    }
  },
  avatar: {
    borderRadius: '5px',
    height: '36px',
    width: 'auto',
    margin: '6px 10px'
  },
  hideSmartphone: {
    [screenSize.smartphone]: {
      display: 'none'
    }
  },
  userName: {
    margin: '0 1.5rem'
  },
  pipe: {
    borderRight: '1px solid #5e6c85',
    height: '100%',
    display: 'block'
  },
  balance: {
    color: clr.balance,
    margin: '0 2rem 0 1rem'
  },
  balanceValue: {
    color: clr.negative,
    fontWeight: 'bold'
  },
  transactionsIcon: getIcon(icons.transactions32),
  close: {
    [screenSize.smartphone]: {
      position: 'absolute',
      right: 0
    }
  },
  closeLink: {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': '48px',
    'width': '48px',
    'cursor': 'pointer',
    ':hover': {
      background: clr.closeSurveyHover
    }
  },
  closeIcon: getIcon(icons.close16)
});
