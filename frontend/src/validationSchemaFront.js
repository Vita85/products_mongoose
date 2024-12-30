import * as Yup from "yup";

const productValidationSchema = Yup.object().shape({
  title: Yup.string()
    .matches(/^[a-zA-Z0-9\s\-\_]+$/, "Invalid title")
    .min(2, "Title must be at least 2 characters long")
    .max(30, "Title must be at most 30 characters long")
    .required("Title is required"),
  description: Yup.string()
    .matches(/^[a-zA-Z0-9\s\-\_,.]+$/, "Invalid description")
    .min(2, "Description must be at least 2 characters long")
    .max(200, "Description must be at most 200 characters long")
    .required("Description is required"),
  price: Yup.number()
    .min(1, "Price must be at least 1")
    .max(9999, "Price must be at most 9999")
    .required("Price is required"),
});

export default productValidationSchema;