import styles from './ButtonSecondary.module.css';

function ButtonSecondary({ buttonSecondary }) {
  return (
    <>
    <button className={styles.buttonSecondary}>{buttonSecondary}</button>

    </>
  );
}

export default ButtonSecondary;
