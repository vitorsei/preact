import * as React from 'react';
import SelectClickBarListRow from './select-click-bar-list-row';

const SelectClickBar = (props) => {
  return (
    <form action="">
      {props.answers.map((answer) =>
        <SelectClickBarListRow key={answer.guid}
                               answerText={answer.text}
                               answerId={answer.guid}
                               answerName="selectClickBar"
                               customStyles={props.customStyles}
                               selectedAnswer={props.selectedAnswer}
                               onClick={props.selectAnswer}
        />
      )}
    </form>
  );
};

export default SelectClickBar;
