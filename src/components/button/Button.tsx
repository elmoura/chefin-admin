import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  className?: string;
};

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={`bg-green-500 font-bold text-md text-white px-5 py-2 rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
