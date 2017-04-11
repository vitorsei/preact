import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { clr } from '../../styles/settings';
import SelectClickBar from './select-click-bar';
import * as controlTypes from './survey-control-types';
import SelectRadio from './select-radio';

const SurveyControl = (props) => {
  return (
    <div className={css(styles.surveyControlRoot)}>
      {
        (() => {
          if (props.controlType === controlTypes.SELECT_CLICK_BAR) {
            return <SelectClickBar answers={props.answers}
                                   customStyles={props.customStyles}
                                   selectAnswer={props.selectAnswer}
                                   selectedAnswer={props.selectedAnswer}/>;
          }
          if (props.controlType === controlTypes.RADIO) {
            return <SelectRadio answers={props.answers}
                                customStyles={props.customStyles}
                                selectAnswer={props.selectAnswer}
                                selectedAnswer={props.selectedAnswer}/>;
          }
          return null;
        })()
      }
    </div>
  );
};

const styles = StyleSheet.create({
  surveyControlRoot: {
    background: clr.negative,
    minHeight: '245px',
    padding: '22px'
  }
});

export default SurveyControl;
