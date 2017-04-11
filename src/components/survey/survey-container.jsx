import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as campaignActions from '../../store/actions/campaign-actions';
import * as userActions from '../../store/actions/user-actions';
import SurveyBox from './survey-box';

function mapStateToProps(state) {
  return {
    campaign: state.campaign,
    customStyles: state.customStyles.surveyBox
  };
}

function mapDispatchToProps(dispatch) {
  return {
    campaignActions: bindActionCreators(campaignActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

class Survey extends React.Component {
  state = {
    selectedAnswer: '',
    disableButton: true
  };

  selectAnswer = (event) => {
    const answerId = event.target.id;
    this.setState({ selectedAnswer: answerId, disableButton: false });
  }

  submitAnswer = () => {
    const answersIds = this.props.campaign.question.answers.map(item => item.guid);

    this.props.campaignActions.submitAnswer(this.props.campaign.id,
      this.props.campaign.question.guid,
      this.state.selectedAnswer,
      answersIds);
  }

  componentWillMount() {

    this.props.userActions.loadProfile();

    const campaignId = this.props.params.id;
    if (campaignId) {
      this.props.campaignActions.loadCampaign(campaignId);
    }
  }

  render() {
    return (
      <div>
        <SurveyBox campaign={this.props.campaign}
                   selectAnswer={this.selectAnswer}
                   selectedAnswer={this.state.selectedAnswer}
                   disableButton={this.state.disableButton}
                   submitAnswer={this.submitAnswer}
                   customStyles={this.props.customStyles}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
