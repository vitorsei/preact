import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, css } from 'aphrodite';
import * as authActions from '../store/actions/auth-actions';
import * as customStylesActions from '../store/actions/custom-styles-actions';
import Header from './shared/header';
import Footer from './shared/footer';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '../components/home/home-container';
import LoginPage from '../components/login/login-container';
import SurveyPage from '../components/survey/survey-container';
import asyncComponent from './AsyncComponent';

const Foo = asyncComponent(() => System.import('./Foo').then(module => module.default), { name: 'Foo' });

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
  state = {
    showSettings: false
  };

  componentWillMount() {
    this.props.customStylesActions.getCustomStyles();
  }

  render() {
    const rootCss = StyleSheet.create(this.props.customStyles.root).mainRoot;
    const mainViewCss = StyleSheet.create(this.props.customStyles.mainView).mainViewRoot;
    return (
      <BrowserRouter>
        <main className={css(styles.root, rootCss)}>

          <Header user={this.props.user}
                  campaign={this.props.campaign}
                  showSettings={this.state.showSettings}
                  onLogout={this.props.authActions.onLogout}
                  customStyles={this.props.customStyles.header.css}
                  data={this.props.customStyles.header.data}
                  redirectTo={this.props.redirectTo}
          />

          <div className={css(styles.mainView, mainViewCss)}>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/survey/:id" component={SurveyPage}/>
            <Route path="/foo" component={Foo} />
          </div>

          <Footer footerLinks={this.props.customStyles.footer}/>

        </main>
      </BrowserRouter>
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
