import React from "react";
import { Alert } from "@material-tailwind/react";
import { Status } from "@/types/types";

interface SuccessAlertProps {
  className?: string;
  successText: string;
  errorText: string;
  status: Status;
}
export default function PopupAlert({
  className,
  successText,
  errorText,
  status,
}: SuccessAlertProps) {
  if (status === "error") {
    return (
      <div className="fixed top-5 w-screen left-0 px-2.5 z-50 flex items-center justify-center">
        <Alert
          animate={{
            mount: { y: 0 },
            unmount: { y: -100 },
          }}
          open={status === "error"}
          className={`${className} bg-light-red font-semibold border border-red text-red text-sm min-h-9 p-2.5 shadow-lg flex justify-center`}
        >
          <div className="-mr-12">{errorText}</div>
        </Alert>
      </div>
    );
  }
  return (
    <div className="fixed top-5 w-screen left-0 px-2.5 z-50 ">
      <Alert
        animate={{
          mount: { y: 0 },
          unmount: { y: -100 },
        }}
        open={status === "success"}
        className={`${className} bg-secondary border border-primary font-semibold text-primary text-sm min-h-9 p-2.5 shadow-lg flex justify-center`}
      >
        <div className="-mr-12">{successText}</div>
      </Alert>
    </div>
  );
}
