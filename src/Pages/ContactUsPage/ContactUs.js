import React from "react";
import "./ContactUs.css";
import { TextField } from "@mui/material";
import EmptyTextarea from "../../Components/TextArea/TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = { name: "", email: "", content: "" };
const contactURL = process.env.REACT_APP_URL + "/contact";

const notify = () => toast.success("Email sent successfully");

const onSubmit = async (values, { resetForm }) => {
  try {
    const res = await axios.post(`${contactURL}`, {
      name: values.name,
      message: values.content,
      email: values.email,
    });
    notify();
    resetForm();
  } catch (err) {
    console.log(err);
  }
};

//1st step of yup : create a validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name Cannot Contain Numbers!")
    .required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  content: Yup.string().required("Required!"),
});

const ContactUs = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema,
  });

  // console.log('visited fields',formik.touched);

  return (
    <>
      <h1 className="contact-h1">
        Thanks for taking the time to reach out.
        <br /> How can I help you today?
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="email-name-container">
          <div>
            <TextField
              id="outlined-basic"
              color="secondary"
              error={formik.touched.name && Boolean(formik.errors.name)}
              label="Name"
              name="name"
              {...formik.getFieldProps("name")} //b3tya esm l attribute name
              variant="outlined"
              sx={{
                width: "19rem",
                "&:hover fieldset": {
                  borderColor:
                    formik.touched.name && formik.errors.name
                      ? "red !important"
                      : "#6E07F3 !important",
                },
              }}
              className="name-input"
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="errors">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              color="secondary"
              error={formik.touched.email && Boolean(formik.errors.email)}
              label="Email"
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
              variant="outlined"
              sx={{
                width: "19rem",
                "&:hover fieldset": {
                  borderColor:
                    formik.touched.email && formik.errors.email
                      ? "red !important"
                      : "#6E07F3 !important",
                },
              }}
              className="email-input"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="errors">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="text-area-container">
          <div>
            <EmptyTextarea
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
              hasError={
                formik.touched.content && Boolean(formik.errors.content)
              }
              name="content"
            />
            {formik.errors.content && formik.touched.content ? (
              <div className="errors">{formik.errors.content}</div>
            ) : null}
          </div>
          <button className="send-email-btn" type="submit">
            Send Email
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactUs;
