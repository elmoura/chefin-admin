import { FunctionComponent, ButtonHTMLAttributes } from "react";
import "./index.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button: FunctionComponent<ButtonProps> = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};
