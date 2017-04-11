import * as React from 'react';
import SelectRadioListRow from './select-radio-list-row';

const SelectRadio = (props) => {
  return (
    <form action="">
      {props.answers.map((answer) =>
        <SelectRadioListRow key={answer.guid}
                               answerText={answer.text}
                               answerId={answer.guid}
                               answerName="selectRadio"
                               customStyles={props.customStyles}
                               selectedAnswer={props.selectedAnswer}
                               onClick={props.selectAnswer}
        />
      )}
    </form>
  );
};

export default SelectRadio;
