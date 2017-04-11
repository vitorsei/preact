import * as React from 'react';

const ListErrors = (props) => {
  if (props.errors) {
    return (
      <ul className="error-messages">
        <li>{ props.errors }</li>
      </ul>
    );
  }

  return (<div></div>);
};

export default ListErrors;
