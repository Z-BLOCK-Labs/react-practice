import React from "react";

interface IProps {
  handleClick: (data: number) => void;
}

export default ({ handleClick }: IProps) => {
  console.log('render A');
  return (
    <div>
      <button onClick={() => handleClick(1)}>click</button>
    </div>
  );
};