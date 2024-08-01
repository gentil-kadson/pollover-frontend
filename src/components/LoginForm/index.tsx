import { ChangeEvent } from "react";
import styles from "./LoginForm.module.css";

type LoginFormProps = {
  handleUsername: (username: string) => void;
  handleRegisterClick: (e: any) => void;
  handleLoginClick: (e: any) => void;
};

export default function LoginForm({
  handleUsername,
  handleRegisterClick,
  handleLoginClick,
}: LoginFormProps) {
  return (
    <form className={styles.form} method="POST">
      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          className={styles.input}
          type="text"
          name="username"
          id="username"
          required
          onChange={(e) => handleUsername(e.target.value)}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${styles.redButton}`}
          onClick={(e) => handleLoginClick(e)}
        >
          Login
        </button>
        <button
          className={`${styles.button} ${styles.lightButton}`}
          onClick={(e) => handleRegisterClick(e)}
        >
          Register
        </button>
      </div>
    </form>
  );
}
