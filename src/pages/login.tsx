import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.loginTitle}>Authentication</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              className={styles.input}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className={styles.buttonsContainer}>
            <button className={`${styles.button} ${styles.redButton}`}>
              Login
            </button>
            <button className={`${styles.button} ${styles.lightButton}`}>
              Register
            </button>
          </div>
        </form>
        <p className={`${styles.usernameTakenText} ${styles.hideElement}`}>
          This username is already taken.
        </p>
      </section>
    </main>
  );
}
