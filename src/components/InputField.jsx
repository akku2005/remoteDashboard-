import { RiErrorWarningLine } from "react-icons/ri";

/* eslint-disable react/prop-types */
export const InputField = ({
  id,
  label,
  type,
  error,
  isRequired,
  labelClassName,
  inputClassName,
  containerClassName,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <label
        htmlFor={id}
        className={`text-sm font-primary flex flex-row items-center gap-1 text-mainBlack/70 ${labelClassName}`}
      >
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className={`border border-border bg-background/50 p-2 placeholder:text-mainBlack/50 text-mainBlack rounded focus:outline-none focus:ring-2 focus:ring-primary-500 ${inputClassName}`}
        {...props}
        required={isRequired}
      />
      {error && (
        <div className="text-red-700 gap-1 text-sm flex flex-row items-center bg-red-100/10 px-2 py-1">
          <RiErrorWarningLine />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
