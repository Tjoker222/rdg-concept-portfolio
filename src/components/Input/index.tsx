import classNames from "classnames";
import {
  forwardRef,
  InputHTMLAttributes,
  useState,
  cloneElement,
  ReactNode,
} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  error?: string;
  full?: boolean;
  icon?: ReactNode;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label = "", icon, error = false, full = false, type, disabled, ...props },
    ref
  ) => {
    const inputClasses = classNames(
      `h-[9.3rem]
      w-full 
      flex
      items-center
      gap-sm 
      bg-white
      border-[0.1rem]
      border-black
      transition-all 
      duration-300
      px-xl 
      sm:px-base 
      peer`,
      {
        "text-red-300 ring-red-300 ring-1": !disabled && error,
        "opacity-[0.4] cursor-not-allowed": disabled,
      }
    );

    return (
      <div
        className={`${
          full ? "w-full" : "w-fit"
        } flex flex-col gap-xs justify-start items-start`}
      >
        <div className={inputClasses}>
          {label && (
            <label
              className="text-style-medium-xl font-inter text-gray-500"
              htmlFor={label
                .toLowerCase()
                .trimEnd()
                .trimStart()
                .split(" ")
                .join("-")}
            >
              {label}
            </label>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={`
            focus: outline-none
            text-black
            text-style-medium-xl 
            font-inter
            w-full h-full
            `}
            {...props}
          />
          {icon && cloneElement(icon as any)}
        </div>
        {error && (
          <small className="text-style-medium-xl font-inter text-red-300">
            {error}
          </small>
        )}
      </div>
    );
  }
);