import React from "react";
import { BookSchema } from "../../utilis";
import {
  Container,
  FormGroup,
  Label,
  Button,
  Alert,
  Row,
  Col
} from "reactstrap";
import { Formik, Field, Form } from "formik";
import { TextInput, TextArea, Select } from "..";

const BookForm = ({ book = {}, onSubmit, categories, authors, error }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={book}
      validationSchema={BookSchema}
      onSubmit={(values, { resetForm }, errors) => {
        onSubmit(values);
      }}
    >
      {({ resetForm, errors, values }) => (
        <Container>
          {error && <Alert color="danger">{JSON.stringify(error)}</Alert>}
          <Form>
            <FormGroup>
              <Label>Title</Label>
              <Field
                value={values.title || ""}
                name="title"
                type={"text"}
                component={TextInput}
              />
            </FormGroup>
            <Row>
              <Col xs="6" lg="6">
                <FormGroup className="flex-row-aic">
                  <Label>Category</Label>

                  <Field
                    value={values.category || ""}
                    name="category"
                    type={"text"}
                    component={props => {
                      return (
                        <Select
                          itemSelected={book.category}
                          options={categories}
                          default="Select Category"
                          {...props}
                        />
                      );
                    }}
                  />
                </FormGroup>
              </Col>

              <Col xs="6" lg="6">
                <FormGroup className="flex-row-aic">
                  <Label>Author</Label>

                  <Field
                    value={values.author || ""}
                    name="author"
                    type={"text"}
                    component={props => {
                      return (
                        <Select
                          itemSelected={book.author}
                          options={authors}
                          default="Select Author"
                          {...props}
                        />
                      );
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label>Description</Label>
              <Field
                value={values.description || ""}
                name="description"
                type={"text"}
                component={TextArea}
              />
            </FormGroup>

            <FormGroup>
              <Label>ISBN</Label>
              <Field
                value={values.isbn || ""}
                name="isbn"
                type={"text"}
                component={TextInput}
              />
            </FormGroup>

            <FormGroup>
              <Label>Page . NO</Label>
              <Field
                value={values.pagesNumber || ""}
                name="pagesNumber"
                type={"text"}
                component={TextInput}
              />
            </FormGroup>

            <FormGroup>
              <Label>Year Published</Label>
              <Field
                value={values.publishYear || ""}
                name="publishYear"
                type={"text"}
                component={TextInput}
              />
            </FormGroup>

            <FormGroup>
              <Label>Image URl</Label>
              <Field
                value={values.image || ""}
                name="image"
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
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default BookForm;
