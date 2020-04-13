import React from "react";
import { Button } from "@material-ui/core";

const CounterButton = (props) => {
  const isDisabled = props.counter === 0;
  return (
    <Button variant="contained" color={props.color} disabled={isDisabled} onClick={props.onAction}>
      {props.text}
    </Button>
  );
};

CounterButton.defaultProps = {
  color: '',
  text: 'Counter',
  isDisabled: false
}


export default CounterButton;
