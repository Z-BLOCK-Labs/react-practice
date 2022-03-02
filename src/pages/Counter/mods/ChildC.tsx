import React, { useContext } from "react";
import { context } from '../index';


const P2 = () => {
  const count = useContext(context);
  return <>{count}</>
}

const P1 = () => {
  return (
    <>
      <P2 />
    </>
  );
}

export default () => {
  return (
    <div>
      <P1 />
    </div>
  );
};