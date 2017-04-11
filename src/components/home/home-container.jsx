import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CampaignState } from '../../store/reducers/campaign-reducer';
import * as homeActions from '../../store/actions/campaign-actions';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

function mapStateToProps(state) {
  return {
    campaign: state.campaign
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

class Home extends React.Component {
  render() {
    return (
      <div className={css(styles.homeRoot)}>
        <Link to="survey/0ee8a921-e777-452d-81f9-246f67be89f6">
          &nbsp;Survey
        </Link>
        <br/>
        <Link to="survey/9b0f039f-c6f4-465b-b727-c6e684677691">
          &nbsp;Survey 2
        </Link>
        <br/>
        <Link to="survey/30569f1f-55b7-4dba-9430-8e3ec3bef78d">
          &nbsp;Survey 3
        </Link>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  homeRoot: {
    position: 'absolute',
    bottom: '100px',
    textAlign: 'center',
    width: '100%'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
