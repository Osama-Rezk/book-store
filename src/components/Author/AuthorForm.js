import React from "react";
import { AuthorSchema } from "../../utilis";
import { Container, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form } from "formik";
import { TextInput, TextArea } from "../../components";
const AuthorForm = ({ author = {}, onSubmit }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={author}
      validationSchema={AuthorSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
      }}
    >
      {({ resetForm, values }) => (
        <Container>
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Field
                value={values.name || ""}
                name="name"
                type={"text"}
                component={TextInput}
              />
            </FormGroup>
            <FormGroup>
              <Label>Job Title</Label>
              <Field
                value={values.jobTitle || ""}
                name="jobTitle"
                type={"text"}
                component={TextInput}
              />
            </FormGroup>
            <FormGroup>
              <Label>Bio</Label>
              <Field
                value={values.bio || ""}
                name="bio"
                type={"text"}
                component={TextArea}
              />
            </FormGroup>
            <Button className="mar-5-f-r" type="submit" color="primary">
              Submit
            </Button>
            <Button
              onClick={() => {
                resetForm();
              }}
            >
              Cancel
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default AuthorForm;
