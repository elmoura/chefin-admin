import { FunctionComponent, InputHTMLAttributes, useState } from "react";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

export const TextInput: FunctionComponent<ITextInputProps> = ({
  id,
  label,
  placeholder,
  ...rest
}: ITextInputProps) => {
  return (
    <div className="text-input flex flex-col">
      {label && (
        <label htmlFor={id} className="font-bold pb-1">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className="px-3 py-2 outline-none border shadow-inner border-gray-600 focus:border-2 hover:border-orange-400 focus:border-orange-400 transition-all rounded"
        {...rest}
      />
    </div>
  );
};
