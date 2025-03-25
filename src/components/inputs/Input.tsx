"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@material-tailwind/react";
import { variant } from "@material-tailwind/react/types/components/input";
import { ErrorMessage } from "formik";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface InputProps {
  type: HTMLInputTypeAttribute;
  variant: variant;
  label: string;
  placeholder: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  name: string;
  value: string | number | readonly string[] | undefined;
}

interface InputCustomProps extends InputProps {
  error: string | undefined;
  touched: boolean | undefined;
  className?: string;
  isPassword?: boolean;
}

export default function InputCustom({
  type,
  variant,
  handleChange,
  value,
  error,
  touched,
  name,
  label,
  placeholder,
  className,
  isPassword,
}: InputCustomProps) {
  const [isVisible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!isVisible);
  return (
    <div className={className}>
      <Input
        type={isPassword ? (isVisible ? "text" : "password") : type}
        variant={variant}
        label={label}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={value}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
        icon={
          isPassword && (
            <button type="button" onClick={handleVisible}>
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          )
        }
      />
      <p
        className={`text-red text-xs mt-1.5 ${error && touched ? "visible" : ""}`}
      >
        <ErrorMessage name={name} />
      </p>
    </div>
  );
}
