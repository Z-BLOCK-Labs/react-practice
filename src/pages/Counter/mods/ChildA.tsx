import React from "react";

interface IProps {
  handleClick: () => void;
}

export default ({ handleClick }: IProps) => {
  console.log('render A');
  return (
    <div>
      <button onClick={() => handleClick()}>click</button>
    </div>
  );
};