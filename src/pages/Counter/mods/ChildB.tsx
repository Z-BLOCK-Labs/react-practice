import React from "react";

type IProps = {
  count: number
}

export default ({ count }: IProps) => {
  console.log('render B');
  return (
    <div>
      click count: {count}
    </div>
  );
};