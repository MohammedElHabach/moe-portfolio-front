import React from "react";
import "./ContactUs.css";
import { TextField } from "@mui/material";
import EmptyTextarea from "../../Components/TextArea/TextArea";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = { name: "", email: "", content: "" };

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  //values.name values.email values.content
  //errors.name errors.email errors.content
  //error.name = 'This field is required'
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format!";
  }

  if (!values.content) {
    errors.content = "Required";
  }

  return errors;
};
//1st step of yup : create a validation schema
const validationSchema = Yup.object({
  name:Yup.string().required('Required!'),
  email:Yup.string().email('Invalid Email Format!').required('Required'),
  content:Yup.string().required('Required!')
})
const OldContactUs = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema
    // validate: validate,
  });

  console.log('visited fields',formik.touched);

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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            variant="outlined"
            sx={{
              width: "19rem",
              "&:hover fieldset": {
                borderColor: formik.touched.name && formik.errors.name ? "red !important" : "#6E07F3 !important",
              }
            }}
            className="name-input"
          />
          {formik.errors.name && formik.touched.name ? <div className="errors">{formik.errors.name}</div> : null}
          </div>
          <div>
          <TextField
            id="outlined-basic"
            color="secondary"
            error={formik.touched.email && Boolean(formik.errors.email)}
            label="Email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            variant="outlined"
            sx={{
              width: "19rem",
              "&:hover fieldset": {
                borderColor: formik.touched.email && formik.errors.email ? "red !important" : "#6E07F3 !important",
              },
            }}
            className="email-input"
          />
          {formik.errors.email && formik.touched.email ? <div className="errors">{formik.errors.email}</div> : null}
          </div>
        </div>
        <div className="text-area-container">
          <div>
          <EmptyTextarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            hasError={formik.touched.content && Boolean(formik.errors.content)}
            name="content"
          />
          {formik.errors.content && formik.touched.content ? <div className="errors">{formik.errors.content}</div> : null}
          </div>
          <button className="send-email-btn" type="submit">
            Send Email
          </button>
        </div>
      </form>
    </>
  );
};

export default OldContactUs;
