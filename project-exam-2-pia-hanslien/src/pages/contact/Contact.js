import Form from "../../components/form/Form";
import styles from './Contact.module.css';
import Heading from "../../components/elements/heading/Heading";

function Contact() {
  return (
    <>
      <div>
      <Heading headingLarge="Contact us" />
      </div>
      <div className={styles.container}>
      <Form />
    </div>
    </>
  );
}

export default Contact;
