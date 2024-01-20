import React from 'react';
import './Button.scss';

export function Button(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }

  function getButtonColorClassName() {
    switch (props.color) {
      case "red":
        return "button-red";
      case "dark":
        return "button-dark";
      default:
        return "button-dark";
    }
  }

  return (
    <button
      className={`button ${getButtonColorClassName()}`}
      type="button"
      onClick={handleClick}>
      {props.value}
    </button>
  )
}