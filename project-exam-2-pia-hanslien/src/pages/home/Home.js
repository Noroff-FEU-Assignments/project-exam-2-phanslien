import Heading from "../../components/elements/heading/Heading";
import Cover from "../../components/elements/cover/Cover";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";
import ButtonSecondary from "../../components/elements/button/ButtonSecondary";
import styles from "./Home.module.css";
import contentImage1 from "../../img/contentImage1.jpg";
import contentImage2 from "../../img/contentImage2.jpg";

function Home() {
  return (
    <>
      <Cover />
      <div className={styles.contentOne}>
        <Heading headingMedium="Find your stay now!" />
        <p>Lorem ipsum sipsum rod jecsa lodent varie skol</p>
        <p>Lorem ipsum sipsumt varie skol</p>
        <ButtonPrimary buttonPrimary="Search"/>
      </div>
      <div className={styles.contentTwo}>
        <div className={styles.textbox}>
          <div>
          <Heading headingSmall="Get in touch with us" />
          <p>Lorem ipsum sipsum rod jecsa lodent varie skol</p>
          <p>Lorem ipsum sipsumt varie skol</p>
          <ButtonSecondary buttonSecondary="Search"/>
          </div>
        </div>
        <img
          src={contentImage1}
          alt="Content"
          className={styles.contentImage1}
        />
      </div>
      <div className={styles.contentTwo}>
        <img
          src={contentImage2}
          alt="Content"
          className={styles.contentImage2}
        />
          <div className={styles.textbox}>
          <div>
          <Heading headingSmall="Get in touch with us" />
          <p>Lorem ipsum sipsum rod jecsa lodent varie skol</p>
          <p>Lorem ipsum sipsumt varie skol</p>
          <ButtonSecondary buttonSecondary="Search"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
