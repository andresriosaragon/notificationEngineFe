import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Card, Typography } from "@material-ui/core";

import { fetchIndustries } from "../features/source/sourceApiCalls";
import { industriesOptionsSelector } from "../features/source/sourceSelectors";
import { Select, TextInput, ResponsiveFormContainer } from "../components/Form";

const FormPage = () => {
  const { status, options } = useSelector(industriesOptionsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchIndustries());
    }
  }, [status, dispatch]);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      history.push("/table");
    },
  });

  return (
    <>
      <Card variant="outlined">
        <Typography variant="h3" component="h2" gutterBottom>
          Form example
        </Typography>
        <Typography variant="body1" component="h2" gutterBottom>
          You can set the name in the form and it will be reflected on the table
          page
        </Typography>
      </Card>
      <form onSubmit={formik.handleSubmit}>
        <ResponsiveFormContainer>
          <TextInput
            inputLabel="name"
            id="name"
            name="name"
            label="name"
            handleChange={formik.handleChange}
          />
          <Select
            value={formik.values.age}
            handleChange={formik.handleChange}
            name="industry"
            id="name"
            label="industry"
            items={options}
          />
        </ResponsiveFormContainer>
      </form>
    </>
  );
};

export { FormPage };
