"use client";
import PopupAlert from "@/components/alerts/PopupAlert";
import SubmitButton from "@/components/buttons/SubmitButton";
import InputCustom from "@/components/inputs/Input";
import { register } from "@/services/api/auth";
import { Status } from "@/types/types";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { number, object, ref, string } from "yup";

const initialValues = {
  username: "",
  email: "",
  phone_number: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = object({
  username: string().required("Username is required"),
  phone_number: number().required("Username is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: string()
    .required("Confirm Password is required")
    .oneOf([ref("password")], "Passwords must match"),
});

export default function RegisterForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (values: typeof initialValues) => {
    const reqBody = {
      username: values.username,
      email: values.email,
      phone_number: values.phone_number.toString(),
      password: values.password,
      role: "user",
    };
    try {
      const response = await register(reqBody);

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
        }, 2000);
        router.push("/login");
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
        validateOnChange
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <div className="w-full mt-5 flex flex-col gap-5">
              <InputCustom
                type="text"
                name="username"
                label="Username"
                value={values.username}
                variant="standard"
                placeholder="Enter your username"
                handleChange={handleChange}
                error={errors.username}
                touched={touched.username}
              />
              <InputCustom
                type="text"
                name="phone_number"
                label="Phone Number"
                value={values.phone_number}
                variant="standard"
                placeholder="Enter your phone number"
                handleChange={handleChange}
                error={errors.phone_number}
                touched={touched.phone_number}
              />
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
              <InputCustom
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={values.confirmPassword}
                variant="standard"
                placeholder="Confirm your password"
                handleChange={handleChange}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
              <SubmitButton text="Register" isLoading={status === "loading"} />
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
