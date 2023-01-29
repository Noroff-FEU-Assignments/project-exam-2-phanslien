import cover from '../../../img/cover.jpg';
import styles from './Cover.module.css';
function Cover() {
  return (
    <img src={cover} alt="Cover" className={styles.cover} />
  );
}

export default Cover;