import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { clr, screenSize } from '../../styles/settings';
import SurveyControl from './survey-control';
import { headerHeight } from '../../styles/base.elements';
import SurveyBoxHeader from './survey-box-header';
import SurveyBoxProgressBar from './survey-box-progress-bar';
import SurveyBoxFooter from './survey-box-footer';

const SurveyBox = (props) => {

  return (
    <div className={css(styles.surveyBoxRoot)}>
      <SurveyBoxHeader headerText={props.campaign.question.text}
                       customStyles={props.customStyles.surveyBoxHeader}/>

      <SurveyControl controlType={props.campaign.question.control_type}
                     answers={props.campaign.question.answers}
                     selectAnswer={props.selectAnswer}
                     selectedAnswer={props.selectedAnswer}
                     customStyles={props.customStyles}/>

      <SurveyBoxProgressBar progress={props.campaign.progress}
                            customStyles={props.customStyles.surveyBoxProgressBar} />

      <SurveyBoxFooter disableButton={props.disableButton}
                       submitAnswer={props.submitAnswer}
                       customStyles={props.customStyles.surveyBoxFooter}/>

    </div>
  );
};

const styles = StyleSheet.create({
  surveyBoxRoot: {
    boxShadow: `0 0 0.6rem 0 ${clr.boxShadow}`,
    // position: 'absolute',
    // left: 0,
    // right: 0,
    [screenSize.smartphone]: {
      width: 'auto',
      margin: `${headerHeight} auto`
    },
    [screenSize.desktop]: {
      width: '600px',
      margin: '150px auto'
    }
  }
});

export default SurveyBox;
