import { useState } from "react";
import { ContactFormURL } from "../../constants/API";
import styles from "./Contact.module.css";
import HeadingMedium from "../../components/elements/heading/HeadingMedium";
import HeadingLarge from "../../components/elements/heading/HeadingLarge";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setEmail] = useState("");
  const [messageText, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setErrorMessage("Example error message!");
  };
  function addForm(e) {
    e.preventDefault();
    let FirstName = firstName;
    let LastName = lastName;
    let email = mail;
    let message = messageText;

    let body = {
      data: {
        FirstName,
        LastName,
        email,
        message,
      },
    };

    fetch(ContactFormURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(body),
    }).then(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    });
  }

  return (
    <form onSubmit={addForm}>
      <div className={styles.container_contact}>
        <HeadingLarge headingLarge="Contact us" />
        <div className={styles.container_contact_form}>
          <p>First name:</p>
          <input
            className={styles.container_form__input}
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
          <p>Last name:</p>
          <input
            className={styles.container_form__input}
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
          <p>E-mail:</p>
          <input
            className={styles.container_form__input}
            type="text"
            placeholder="Enter your email"
            value={mail}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <p>Message:</p>
          <textarea
            className={styles.container_form__messageInput}
            type="text"
            placeholder="Enter your message"
            value={messageText}
            onChange={(e) => setMessage(e.currentTarget.value)}
          ></textarea>
        <ButtonPrimary
          onClick={handleClick}
          buttonPrimary="Send"
          type="submit"
        />
        </div>
      </div>
    </form>
  );
}
export default Contact;
