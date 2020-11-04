import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function DialogComponent({
  dialogClickHandleClose,
  dialogClickHandleOpen,
  dialogInfo,
}) {
  return (
    <Dialog
      open={dialogClickHandleOpen}
      onClose={dialogClickHandleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogInfo}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
