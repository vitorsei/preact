import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

class SelectRadioListRow extends React.Component{

  isActive = (answerId) => {
    const customCss = StyleSheet.create(this.props.customStyles.surveyControl.selectRadio);
    if (answerId === this.props.selectedAnswer) {
      return customCss.selectRadioListRowActive;
    }
    return customCss.selectRadioListRowDefault;
  }

  render() {
    return (
      <label htmlFor={this.props.answerId} className={css(styles.label)}>
        <span className={css(styles.radio, this.isActive(this.props.answerId))}></span>
        <input type="radio"
               id={this.props.answerId}
               name={this.props.answerName}
               value="a"
               className={css(styles.input)}
               onClick={this.props.onClick}>
        </input>
        &nbsp;&nbsp;{this.props.answerText}
      </label>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingBottom: '20px'
  },
  button: {
    display: 'inline-block',
    cursor: 'pointer',
    padding: '10px 0',
    textAlign: 'left',
    width: '100%'
  },
  radio: {
    height: '16px',
    width: '16px'

  },
  input: {
    display: 'none'
  }
});

export default SelectRadioListRow;
