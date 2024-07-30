import styles from "../styles/CreatePoll.module.css";

import PollOption from "@/components/PollOption";

export default function CreatePoll() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Poll Creation</h1>
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
          <section>
            <PollOption optionNumber={1} />
            <PollOption optionNumber={2} />
          </section>
        </form>
        <div>
          <button>Add option</button>
          <button>Save</button>
        </div>
      </section>
    </main>
  );
}
