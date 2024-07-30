import styles from "./PollCreationForm.module.css";

type PollCreationFormProps = {
  options: JSX.Element[];
};

export default function PollCreationForm({ options }: PollCreationFormProps) {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="pollTitle" className={styles.label}>
          Title
        </label>
        <input
          className={styles.input}
          type="text"
          name="pollTitle"
          id="pollTitle"
        />
      </div>
      <section className={styles.pollOptions}>
        {options.map((option) => option)}
      </section>
    </form>
  );
}
