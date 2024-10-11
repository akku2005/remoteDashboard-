/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

export const PrimaryBtn = ({ children, className, ...props }) => {
  return (
    <Button
      className={`MainGr normal-case font-primary font-medium text-base w-full rounded-lg shadow-none hover:shadow-none flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};
