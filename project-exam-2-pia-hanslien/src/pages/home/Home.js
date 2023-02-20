import Heading from "../../components/elements/heading/HeadingLarge";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
      <div className={styles.container_home}>
        <Heading headingLarge="Find your stay now!" />
        <p>Lorem ipsum sipsum <br /> rod jecsa lodent varie skol</p>
        <p>Lorem ipsum sipsumt varie skol</p>
        <Link to="/accommodation">
          <ButtonPrimary buttonPrimary="Search" />
        </Link>
      </div>
  );
}

export default Home;
