import { string, object, number } from "yup";

export const BookSchema = object().shape({
  title: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  description: string().required("Required"),

  isbn: string().required("Required"),

  pagesNumber: number().required("Required"),

  publishYear: string()
    .min(4)
    .required("Required"),

  image: string().required("Required"),
  category: string().required("Required"),
  author: string().required("Required")
});

export const CategorySchema = object().shape({
  name: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

export const AuthorSchema = object().shape({
  name: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  jobTitle: string().required("Required"),

  bio: string()
    .min(2, "Too Short!")
    .required("Required")
});
