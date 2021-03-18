import React, { useContext } from "react";
import { ExampleContext } from '../App';

const Square = () => {
  const value = useContext(ExampleContext);
  return <div>{value}</div>;
};

export default Square;
