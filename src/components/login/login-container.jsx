import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../../store/actions/auth-actions';
import * as instanceActions from '../../store/actions/instance-action';
import { instancesFormattedForDropdown } from '../../store/selectors/instance-selectors';
import LoginForm from './login-form';
import { Redirect } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    instancesRaw: state.instances,
    instanceOptions: instancesFormattedForDropdown(state.instances)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
    instanceActions: bindActionCreators(instanceActions, dispatch)
  };
}

class LoginContainer extends React.Component {
  state = {
    loginInfo: { username: '', password: '', instanceCode: 'pp-au' },
    errors: '',
    shouldRedirect: false
  };

  componentWillMount() {
    this.props.instanceActions.loadPureProfileInstances();
  }

  updateLoginState = (event) => {
    const field = event.target.name;
    const login = this.state.loginInfo;
    login[field] = event.target.value;
    return this.setState({ loginInfo: login });
  }

  login = () => {
    this.props.loginActions.onLogin(
      this.state.loginInfo.username,
      this.state.loginInfo.password,
      this.state.loginInfo.instanceCode)
      .then(() => this.setState({ shouldRedirect: true }))
      .catch(error => {
        this.setState({ errors: error.response.body.message });
      });
  }

  register = () => {
    const instancePicked =
      this.props.instancesRaw.find(instance =>
      instance.code === this.state.loginInfo.instanceCode);
    this.props.loginActions.onRegister(
      this.state.loginInfo.username,
      this.state.loginInfo.password,
      instancePicked ? instancePicked.key : '')
      .catch((error) => {
        this.setState({ errors: error.response.body.message });
      });
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <LoginForm
        instanceOptions={this.props.instanceOptions}
        onChange={this.updateLoginState}
        onLogin={this.login}
        onRegister={this.register}
        loginInfo={this.state.loginInfo}
        errors={this.state.errors}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
