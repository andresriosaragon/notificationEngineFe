import React from "react";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

import { Card, Typography } from "@material-ui/core";

import { userAtom } from "../recoil/age/age.atom";

import { Select, TextInput, ResponsiveFormContainer } from "../components/Form";

const FormPage = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const history = useHistory();
  const formik = useFormik({
    initialValues: user,
    onSubmit: (values) => {
      setUser(values);
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
          <TextInput
            inputLabel="name"
            id="name"
            name="name"
            label="name"
            handleChange={formik.handleChange}
          />
        </ResponsiveFormContainer>
      </form>
    </>
  );
};

export { FormPage };
