import styles from './Heading.module.css';

function Heading({ headingLarge, headingMedium, headingSmall }) {
  return (
    <>
    <h1 className={styles.headingLarge}>{headingLarge}</h1>
    <h2 className={styles.headingMedium}>{headingMedium}</h2>
    <h3 className={styles.headingSmall}>{headingSmall}</h3>
    </>
  );
}

export default Heading;