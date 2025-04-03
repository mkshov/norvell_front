"use client";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Modal from "@mui/material/Modal";

import "../../app/contacts-us/ContactsUs.css";

const MyModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [success, setSuccess] = useState(false);
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ffkn9jj", "template_9e9tkig", formRef.current, "b7MhDtuBxTDx_R8H9")
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.text);
        alert("FAILED...", error);
      });

    e.target.reset();
  };
  return (
    <Box>
      <Button onClick={handleOpen} sx={{ marginTop: "10px" }} className="main-button">
        contacts us
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box
          sx={{
            background: "white",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
          }}
          className="contacts-form"
        >
          <Box sx={{ width: "100%", display: " flex", justifyContent: "flex-end" }}>
            <Typography
              onClick={handleClose}
              variant="h6"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              close
            </Typography>
          </Box>
          <form ref={formRef} onSubmit={sendEmail} className="contacts-form-inputs">
            <Typography variant="h4" sx={{ color: "#01041e" }}>
              contactsUsText2
            </Typography>
            <Typography variant="h5">contactsUsText3 </Typography>
            <Typography variant="h5">contactsUsText4</Typography>
            <div className="contacts-form-inputs-inner">
              <Typography sx={{ marginTop: "40px" }} variant="h6">
                contactsUsText5
              </Typography>
              <TextField
                required
                name="from_name"
                type="text"
                color="secondary"
                variant="outlined"
                placeholder="contactsUsText5"
                InputProps={{
                  style: {
                    fontSize: "25px",
                  },
                }}
              />
              <Typography sx={{ marginTop: "20px" }} variant="h6">
                Email
              </Typography>
              <TextField
                required
                name="from_email"
                color="secondary"
                variant="outlined"
                placeholder="Email"
                type="email"
                InputProps={{
                  style: {
                    fontSize: "25px",
                  },
                }}
              />
              <Typography sx={{ marginTop: "20px" }} variant="h6">
                contactsUsText6
              </Typography>
              <TextField required multiline name="message" rows={4} color="secondary" variant="outlined" placeholder="contactsUsText7" />
              {success && (
                <Alert sx={{ marginTop: "20px" }} variant="outlined" severity="success">
                  contactsUsAlert
                </Alert>
              )}
              <LoadingButton
                sx={{
                  marginTop: "20px",
                  height: "50px",
                  textTransform: "uppercase",
                }}
                className="main-button"
                type="submit"
                value="Send Message"
                // loading={state.submitting}
              >
                contactsUsButton
              </LoadingButton>
            </div>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default MyModal;
