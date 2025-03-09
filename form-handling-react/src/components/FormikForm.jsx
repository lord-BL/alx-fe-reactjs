import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "Yup";
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6")
    .required("Password is required"),
});
function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="div" />
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
