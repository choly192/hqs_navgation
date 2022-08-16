import React from "react";
import { Button } from "antd";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <Button type="primary" onClick={() => dispatch(decrement())}>
        -
      </Button>
      <span>{count}</span>
      <Button type="primary" onClick={() => dispatch(increment())}>
        +
      </Button>
    </div>
  );
};

Counter.displayName = "Counter";
export default Counter;
