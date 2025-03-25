"use client";
import PopupAlert from "@/components/alerts/PopupAlert";
import SubmitButton from "@/components/buttons/SubmitButton";
import InputCustom from "@/components/inputs/Input";
import { login } from "@/services/api/auth";
import { Status } from "@/types/types";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { object, string } from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

export default function LoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await login(values);

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
        }, 2000);
        router.push("/");
      }
    } catch {
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 2000);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <div className="w-full mt-5 flex flex-col gap-5">
              <InputCustom
                type="email"
                name="email"
                label="Email"
                value={values.email}
                variant="standard"
                placeholder="Enter your email"
                handleChange={handleChange}
                error={errors.email}
                touched={touched.email}
              />
              <InputCustom
                type="password"
                name="password"
                label="Password"
                value={values.password}
                variant="standard"
                placeholder="Enter your password"
                handleChange={handleChange}
                error={errors.password}
                touched={touched.password}
                isPassword={true}
              />
              <SubmitButton text="Login" isLoading={status === "loading"} />
            </div>
          </Form>
        )}
      </Formik>
      <PopupAlert
        status={status}
        successText="Login Success"
        errorText="Login Failed. Try again"
      />
    </>
  );
}
