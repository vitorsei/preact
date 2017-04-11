import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { screenSize } from '../../styles/settings';

const SurveyBoxFooter = (props) => {

  const isActive = (surveyBoxCss) => {
    if (props.disableButton) {
      return surveyBoxCss.buttonInactive;
    }
    return surveyBoxCss.buttonActive;
  };

  const surveyBoxCss = StyleSheet.create(props.customStyles);

  return (
    <div className={css(styles.surveyBoxFooter, surveyBoxCss.footer)}>
      <button className={css(styles.button, surveyBoxCss.button, isActive(surveyBoxCss))}
              disabled={props.disableButton}
              onClick={props.submitAnswer}>
        Next
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  surveyBoxFooter: {
    width: '100%',
    minHeight: '42px',
    display: 'flex',
    [screenSize.smartphone]: {
      justifyContent: 'center'
    },
    [screenSize.desktop]: {
      justifyContent: 'flex-end'
    }
  },
  button: {
    fontSize: '1.5rem',
    margin: '1rem',
    [screenSize.smartphone]: {
      width: '100%'
    },
    [screenSize.desktop]: {
      width: '50%'
    }
  }
});

export default SurveyBoxFooter;
