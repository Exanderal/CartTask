import React, { FC } from "react";
import { Component } from "./style";

type Props = {
  content: string;
  // onClick: () => {};
};

const Button: FC<Props> = ({ content }) => {
  return <Component>{content}</Component>;
};

export default Button;
