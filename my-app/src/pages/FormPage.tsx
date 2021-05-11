import React from "react";
import { useFormik } from "formik";

import { Select, TextInput, ResponsiveFormContainer } from "../components/Form";

const FormPage = () => {
  const formik = useFormik({
    initialValues: {
      age: 10,
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <ResponsiveFormContainer cancel>
        <Select
          value={formik.values.age}
          handleChange={formik.handleChange}
          name="age"
          id="name"
          label="age"
          items={[
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ]}
        />
        <TextInput inputLabel="name" id="name" name="name" label="name" />
      </ResponsiveFormContainer>
    </form>
  );
};

export { FormPage };
