import React, { useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import ChildA from "./mods/ChildA";
import ChildB from "./mods/ChildB";
import ChildC from "./mods/ChildC";

export const context = React.createContext<number>(0)

export default (props: RouteComponentProps) => {
  const [state, setState] = useState<number>(0);
  console.log("parent render", state, props);
  const handleClick = (value: number) => {
    console.log(value);
    // can get update value ?
    console.log('click', state);
    setState(state + 1);

    // how to fix async worker ?
    setTimeout(() => {
      setState(state + 1);
    }, 1000);
  };

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div>
      <ChildA handleClick={handleClick} />
      <ChildB count={state} />
      <context.Provider value={state} >
        <ChildC />
      </context.Provider>
    </div>
  );
};
