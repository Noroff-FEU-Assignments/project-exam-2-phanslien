import styles from './ButtonPrimary.module.css';

function ButtonPrimary({ buttonPrimary }) {
  return (
    <>
    <button className={styles.buttonPrimary}>{buttonPrimary}</button>

    </>
  );
}

export default ButtonPrimary;

