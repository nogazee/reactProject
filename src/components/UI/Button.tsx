import React, { PropsWithChildren } from "react";
import classes from "./Button.module.css";

const Button: React.FC<
  PropsWithChildren<{
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    onClick?: () => void;
  }>
> = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
