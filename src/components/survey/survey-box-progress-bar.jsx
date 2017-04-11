import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

const SurveyBoxProgressBar = (props) => {
  const surveyBoxCss = StyleSheet.create(props.customStyles);
  const progress = props.progress.answered / props.progress.questions * 100;
  const progressBarCss = StyleSheet.create({
    complete: {
      width: `${progress}%`
    },
    incomplete: {
      width: `${(100 - progress)}%`
    }
  });

  return (
    <div className={css(styles.progressBar)}>
      <div className={css(progressBarCss.complete, surveyBoxCss.progressBarComplete)}></div>
      <div className={css(progressBarCss.incomplete, surveyBoxCss.progressBarIncomplete)}></div>
    </div>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    display: 'flex',
    height: '10px'
  }
});

export default SurveyBoxProgressBar;
