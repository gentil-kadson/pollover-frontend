import styles from "../../styles/Poll.module.css";

export default function Poll() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Poll Title</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <span className={styles.pollOptionText}>
              Dust begins to fall to the ground the air is cold and thin
            </span>
            <button className={styles.pollOptionButton}>Votar</button>
          </li>
          <li className={styles.li}>
            <span className={styles.pollOptionText}>Opção 2</span>
            <button className={styles.pollOptionButton}>Votar</button>
          </li>
          <li className={styles.li}>
            <span className={styles.pollOptionText}>Opção 3</span>
            <button className={styles.pollOptionButton}>Votar</button>
          </li>
          <li className={styles.li}>
            <span className={styles.pollOptionText}>Opção 4</span>
            <button className={styles.pollOptionButton}>Votar</button>
          </li>
          <li className={styles.li}>
            <span className={styles.pollOptionText}>Opção 5</span>
            <button className={styles.pollOptionButton}>Votar</button>
          </li>
        </ul>
      </section>
    </main>
  );
}
