import { useState } from "react";
import { EnquiryFormUrl } from "../../constants/API";
import styles from "./Enquiry.module.css";
import HeadingLarge from "../../components/elements/heading/HeadingLarge";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";

function Enquiry() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [nights, setNights] = useState("");
  const [messageText, setMessage] = useState("");

  function addForm(e) {
    e.preventDefault();
    let FirstName = firstName;
    let LastName = lastName;
    let email = mail;
    let arrivalDate = date;
    let People = people;
    let Nights = nights;
    let message = messageText;

    let body = {
      data: {
        FirstName,
        LastName,
        email,
        arrivalDate,
        People,
        Nights,
        message,
      },
    };

    fetch(EnquiryFormUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(body),
    }).then(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setPeople("");
      setMessage("");
    });
  }

  return (
    <form onSubmit={addForm}>
      <div className={styles.container_enquiries}>
        <div>
          <HeadingLarge headingLarge="Enquires" />
        </div>
        <div className={styles.container_enquiries__form}>
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
          <p>Arrival date:</p>
          <input
            className={styles.container_form__input}
            type="date"
            placeholder="XXXX-XX-XX"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
          />
          <p>People:</p>
          <input
            className={styles.container_form__input}
            type="number"
            placeholder="Enter your pax"
            value={people}
            onChange={(e) => setPeople(e.currentTarget.value)}
          />
          <p>Nights:</p>
          <input
            className={styles.container_form__input}
            type="number"
            placeholder="Enter your nights"
            value={nights}
            onChange={(e) => setNights(e.currentTarget.value)}
          />
          <p>Message:</p>
          <textarea
            className={styles.container_form__messageInput}
            type="text"
            placeholder="Enter your message"
            value={messageText}
            onChange={(e) => setMessage(e.currentTarget.value)}
          ></textarea>
        </div>
        <ButtonPrimary buttonPrimary="Send" type="submit" />
      </div>
    </form>
  );
}
export default Enquiry;
