import { FunctionComponent, InputHTMLAttributes } from "react";
import "./index.css";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const TextInput: FunctionComponent<ITextInputProps> = ({
  placeholder,
  ...rest
}: ITextInputProps) => {
  return (
    <div className="text-input">
      <input type="text" placeholder={placeholder} {...rest} />
    </div>
  );
};
