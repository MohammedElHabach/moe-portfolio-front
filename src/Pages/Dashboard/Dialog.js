import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>{props.body}</DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button
            onClick={() => {
              if(props.btnForm === "Add"){
                props.setYesOrNoAdd(true);
                props.setYesOrNo(false);
                props.addProject();

              }else if(props.btnForm === "Delete"){
                props.setYesOrNo(true);
                props.setYesOrNoAdd(false);
              }
              // props.setOpen(false);
            }}
            autoFocus
          >
            {props.btnForm}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
