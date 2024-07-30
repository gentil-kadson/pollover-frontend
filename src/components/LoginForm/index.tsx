import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
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
  );
}
