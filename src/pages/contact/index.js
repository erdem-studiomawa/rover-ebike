import React, { useState, useEffect } from "react";

import ApiService from "../../services/api.config";

import { PhoneOutlined, EmailOutlined, RoomOutlined } from "@material-ui/icons";

import "./index.css";
import setTitle from "../../tools.js";
import headerImage from "../../assets/images/contact-page-header.png";

import Brands from "components/Brands";
import FindStore from "components/FindStore";
import Search from "components/Search";

const ContactPage = () => {
  const [formValues, setFormValues] = useState({});
  const [formValidation, setFormValidation] = useState(true);
  const [formSendingStatus, setFormSendingStatus] = useState(0);
  const [formError, setFormError] = useState();

  useEffect(() => {
    setTitle("Contact");
  }, []);

  const setFormValue = (input) => {
    let _formValues = formValues;
    _formValues[input.target.name] = input.target.value;
    setFormValues(_formValues);
  };

  const validateForm = () => {
    let formInputs = [
      { name: "name", label: "Name" },
      { name: "email", label: "Email Address" },
      { name: "message", label: "Message" },
    ];

    let status;
    for (let fi of formInputs) {
      if (
        typeof formValues[fi.name] === "undefined" ||
        formValues[fi.name].length <= 1
      ) {
        setFormError(fi.label + " is required");
        status = false;
        break;
      }
    }
    if (status === false) {
      setFormValidation(false);

      return false;
    } else if (typeof formValues["email"] !== "undefined") {
      let lastAtPos = formValues["email"].lastIndexOf("@");
      let lastDotPos = formValues["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formValues["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          formValues["email"].length - lastDotPos > 2
        )
      ) {
        setFormValidation(false);
        setFormValidation(false);
        setFormError("E-mail is not valid");
        return false;
      }
    }

    setFormValidation(true);
    return true;
  };

  const sendFormData = () => {
    if (validateForm() === true) {
      setFormSendingStatus(1);

      const apiService = ApiService;
      apiService.init();
      apiService
        .post("contact.php", formValues)
        .then((res) => {
          if (res.data.status === 1) {
            setFormSendingStatus(3);
          } else {
            setFormSendingStatus(2);
          }
        })
        .catch((error) => {
          setFormValidation(false);
          setFormError("An error occured");
          setFormSendingStatus(2);
        });
    } else {
      setFormValidation(false);
    }
  };

  const formSendingMessage = () => {
    if (formSendingStatus === 1) {
      return <div className="formSendingMessage">sending...</div>;
    } else if (formSendingStatus === 2) {
      return "error";
    }
  };

  const renderSuccessMessage = () => {
    return (
      <div className="success-message">
        <div>
          <h5>Thank you for getting in touch!</h5>
          <p>
            We appreciate you contacting us. One of our colleagues will get back
            in touch with you soon!Have a great day!
          </p>
        </div>
      </div>
    );
  };

  const renderFormError = () => {
    let message = "An error occured while sending contact form.";
    if (formValues.length !== 3) {
      message = "Please fill out the form";
    }
    return (
      <div className="error-message">
        <div>
          <p>{formError}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-page">
      <div className="main-content">
        <div
          className="main-content-bg"
          style={{
            backgroundImage: "url(" + headerImage + ")",
          }}
          alt="Main Content Asset"
        />

        <div className="contact-area">
          <div className="contact-information">
            <h4>Get in touch with us!</h4>
            <div className="d-flex">
              <div>
                <PhoneOutlined />
              </div>
              <div>
                <p>+1(888)-736-7581</p>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <EmailOutlined />
              </div>
              <div>
                <p>info@roverebike.com</p>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <RoomOutlined />
              </div>
              <div>
                <p>
                  600-1285 W Broadway
                  <br />
                  Vancouver, BC V6H 3X8
                  <br />
                  Canada
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            {formSendingStatus === 3 ? (
              renderSuccessMessage()
            ) : (
              <form action="#" method={"POST"}>
                <div className="form-group">
                  <label>*Name</label>
                  <input
                    type={"text"}
                    name={"name"}
                    onKeyUp={setFormValue}
                  ></input>
                </div>
                <div className="form-group">
                  <label>*Email Address</label>
                  <input
                    type={"text"}
                    name={"email"}
                    onKeyUp={setFormValue}
                  ></input>
                </div>
                <div className="form-group">
                  <label>*Message</label>
                  <textarea name={"message"} onKeyUp={setFormValue}></textarea>
                </div>

                <div className="form-group">
                  {formValidation === false ? renderFormError() : null}
                  {formSendingStatus === 1 ? (
                    formSendingMessage()
                  ) : (
                    <button type={"button"} onClick={sendFormData}>
                      Submit
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <FindStore />
      <Search />
      <Brands />
    </div>
  );
};

export default ContactPage;
