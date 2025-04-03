"use client";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Alert, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LoadingButton from "@mui/lab/LoadingButton";

import "./ContactsUs.css";

interface FormRef {
  current: HTMLFormElement | null;
}

const ContactsUs: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm("service_ffkn9jj", "template_9e9tkig", formRef.current, "b7MhDtuBxTDx_R8H9").then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          alert(error);
        }
      );

      e.currentTarget.reset();
    }
  };

  return (
    <div>
      <div className="contacts-background" />
      <div className="contacts">
        <div className="contacts-container">
          <div className="contacts-header">
            <Typography variant="h2">contactsUs</Typography>
            <Typography variant="h6">contactsUsText</Typography>
          </div>
          <div className="contacts-info">
            <div className="contacts-blocks">
              <EmailIcon sx={{ fontSize: "60px" }} />
              <Typography variant="h4">Email</Typography>
              <Typography variant="h6">danielhazard.info@gmail.com</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts-form">
        <form ref={formRef} onSubmit={sendEmail} className="contacts-form-inputs">
          <Typography variant="h4" sx={{ color: "#01041e" }}>
            contactsUsText2
          </Typography>
          <Typography variant="h5">contactsUsText3</Typography>
          <Typography variant="h5">contactsUsText4</Typography>
          <div className="contacts-form-inputs-inner">
            <Typography sx={{ marginTop: "30px" }} variant="h6">
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
              // loading={state.submitting}
            >
              contactsUsButton
            </LoadingButton>
          </div>
        </form>
        <div className="contacts-form-img">
          <img src="/assets/aboutus/contactsUs_2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactsUs;
