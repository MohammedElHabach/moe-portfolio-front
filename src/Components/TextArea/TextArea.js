import React from "react";
import { styled } from "@mui/system";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const PurpleTextarea = styled(TextareaAutosize)(() => ({
  width: "43.2rem",
  fontFamily: "IBM Plex Sans, sans-serif",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  padding: "12px",
  borderRadius: "4px 4px 0 4px",
  // borderColor: props.hasError ? "red" : "#8c959f",
  // "&:hover": {
  //   borderColor: props.hasError ? "red" : "#6e07f3",
  // },
  // "&:focus": {
  //   borderColor: "#6e07f3 !important",
  // },
  "&:focus-visible": {
    outline: 0,
  },
  "@media (max-width: 768px)": {
    width: "40.2rem",
  },
  "@media (max-width: 693px)": {
    width: "30.2rem",
  },
  "@media (max-width: 490px)": {
    width: "20.2rem",
  },
  "@media (max-width: 339px)": {
    width: "15.2rem",
  },
}));

export default function EmptyTextarea(props) {
  return (
    <PurpleTextarea
      aria-label="minimum height"
      minRows={5}
      placeholder="Email Content"
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      onBlur={props.onBlur}
      sx={{
        borderColor: props.hasError ? "red" : "#8c959f",
        "&:hover": {
          borderColor: props.hasError ? "red" : "#6e07f3",
        },
        "&:focus": {
          borderColor: props.hasError ? "red" : "#6e07f3",
        },
      }}
    />
  );
}
