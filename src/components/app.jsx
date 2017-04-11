import * as React from 'react';
import { connect } from 'react-redux';
import * as cookie from 'react-cookie';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import * as authActions from '../store/actions/auth-actions';
import * as customStylesActions from '../store/actions/custom-styles-actions';
import Header from './shared/header';
import Footer from './shared/footer';

const mapStateToProps = (state) => ({
  user: state.user,
  campaign: state.campaign,
  customStyles: state.customStyles,
  redirectTo: state.auth.redirectTo
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
  customStylesActions: bindActionCreators(customStylesActions, dispatch)

});

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    showSettings: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.authActions.onRedirect();
    }

    const token = cookie.load('pp-token');
    if (!token && !nextProps.location.pathname.includes('login')) {
      this.context.router.replace('/login');
    }
  }

  componentWillMount() {
    this.props.customStylesActions.getCustomStyles();
  }

  render() {
    const rootCss = StyleSheet.create(this.props.customStyles.root).mainRoot;
    const mainViewCss = StyleSheet.create(this.props.customStyles.mainView).mainViewRoot;
    return (
      <main className={css(styles.root, rootCss)}>

        <Header user={this.props.user}
                campaign={this.props.campaign}
                showSettings={this.state.showSettings}
                onLogout={this.props.authActions.onLogout}
                customStyles={this.props.customStyles.header.css}
                data={this.props.customStyles.header.data}
        />

        <div className={css(styles.mainView, mainViewCss)}>
          {this.props.children}
        </div>

        <Footer footerLinks={this.props.customStyles.footer}/>

      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '607px'
  },
  mainView: {
    flex: 1,
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: '100% 350px'
  }
});
