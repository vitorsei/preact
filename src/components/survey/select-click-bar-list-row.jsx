import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

class SelectClickBarListRow extends React.Component {

  isActive = (answerId) => {
    const customCss = StyleSheet.create(this.props.customStyles.surveyControl.selectClickBar);
    if (answerId === this.props.selectedAnswer) {
      return customCss.selectClickBarListRowActive;
    }
    return customCss.selectClickBarListRowDefault;
  }

  render() {
    return (
      <button id={this.props.answerId}
              name={this.props.answerName}
              className={css(styles.clickInput, this.isActive(this.props.answerId))}
              onClick={this.props.onClick}>
        {this.props.answerText}
      </button>

    );
  }
}

const styles = StyleSheet.create({
  clickInput: {
    boxShadow: '0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.3)',
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '5px 0',
    padding: '1.1rem 1.2rem',
    textAlign: 'left',
    width: '100%'
  },
  checkbox: {
    // display: 'none'
  }
});

export default SelectClickBarListRow;
