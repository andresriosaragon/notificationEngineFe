// Render Prop
import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormik } from "formik";
import { Select, TextInput } from "../components/Form";

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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Select
          value={formik.values.age}
          handleChange={formik.handleChange}
          name="age"
          items={[
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ]}
        />
        <TextInput inputLabel="name" id="name" name="name" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { FormPage };
