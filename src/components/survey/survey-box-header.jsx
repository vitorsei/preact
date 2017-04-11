import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { screenSize } from '../../styles/settings';

const SurveyBoxHeader = (props) => {
  const surveyBoxCss = StyleSheet.create(props.customStyles);
  const stylesSmartphones = StyleSheet.create({
    header: {
      [screenSize.smartphone]: { ...props.customStyles.headerSmartphones }
    }
  });

  return (
    <div className={css(styles.header, surveyBoxCss.header, stylesSmartphones.header)}>
      <h3>
        {props.headerText}
      </h3>
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: '2.2rem'
  }
});

export default SurveyBoxHeader;
