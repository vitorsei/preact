import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { clr } from '../../styles/settings';
import ListErrors from '../shared/list-errors';
import SelectInput from '../shared/select-input';
import { headerHeight } from '../../styles/base.elements';

const LoginForm = ({ loginInfo, instanceOptions, onChange, onLogin, onRegister, errors }) => {
  return (
    <div className={css(styles.loginRoot)}>
      <ListErrors errors={errors}/>
      <form name="appForm">
        <div className={css(styles.form)}>
          <h5>LOGIN</h5>
          <div className={css(styles.login)}>
            <div className={css(styles.line)}>
              <label htmlFor="">E-mail:</label>
              <input
                name="username"
                className={css(styles.input)}
                type="email"
                placeholder="Email"
                value={loginInfo.username}
                onChange={onChange}/>
            </div>
            <div className={css(styles.line)}>
              <label htmlFor="">Password:</label>
              <input
                name="password"
                className={css(styles.input)}
                type="password"
                placeholder="Password"
                value={loginInfo.password}
                onChange={onChange}/>
            </div>
            <div className={css(styles.line)}>
              <label htmlFor="">Instance:</label>
              <div >
                <SelectInput
                  name="instanceCode"
                  className={css(styles.input)}
                  value={loginInfo.instanceCode}
                  defaultOption="Pureprofile Australia"
                  options={instanceOptions}
                  onChange={onChange}/>
              </div>
            </div>
            <div className={css(styles.buttons)}>
              <button
                type="button"
                onClick={onLogin}
              >
                LOGIN
              </button>

              <button
                type="button"
                onClick={onRegister}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  loginRoot: {
    margin: `${headerHeight} auto`,
    width: '500px'
  },
  form: {
    margin: '0 auto',
    width: '100%'
  },
  login: {
    'border': `0.2rem solid ${clr.mediumBase}`,
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
    'height': '20rem',
    'padding': '2rem',
    'background-color': clr.extraLightBase
  },
  line: {
    'display': 'flex',
    'justify-content': 'space-between'
  },
  input: {
    width: '30rem'
  },
  buttons: {
    'display': 'flex',
    'justify-content': 'flex-end'
  }
});

export default LoginForm;
