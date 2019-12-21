import React from "react";
import { CategorySchema } from "../../utilis";
import { Container, FormGroup, Label, Button } from "reactstrap";
import { Formik, Field, Form } from "formik";
import { TextInput } from "../../components";

const CategoryForm = ({ category = {}, onSubmit }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={category}
      validationSchema={CategorySchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
      }}
    >
      {({ resetForm, values }) => (
        <Container>
          <Form>
            <FormGroup>
              <Label>name</Label>
              <Field
                value={values.name || ""}
                name="name"
                type={"text"}
                component={TextInput}
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
            </Button>{" "}
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default CategoryForm;
