import styles from "../styles/CreatePoll.module.css";

import PollOption from "@/components/PollOption";
import { useState } from "react";

export default function CreatePoll() {
  const [options, setOptions] = useState<JSX.Element[]>([
    <PollOption optionNumber={1} key={1} />,
    <PollOption optionNumber={2} key={2} />,
  ]);

  function handleAddOption() {
    const index = options.length + 1;
    const newOption = <PollOption optionNumber={index} key={index} />;
    setOptions((prevState) => {
      const updatedOptions = [...prevState];
      updatedOptions.push(newOption);
      return updatedOptions;
    });
  }

  function handleLastOptionRemoval() {
    setOptions((prevState) => {
      const updatedOptions = [...prevState];
      updatedOptions.pop();
      return updatedOptions;
    });
  }

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
          <section className={styles.pollOptions}>
            {options.map((option) => option)}
          </section>
        </form>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={handleAddOption}>
            Add option
          </button>
          <button
            disabled={options.length == 2 ? true : false}
            className={styles.button}
            onClick={handleLastOptionRemoval}
          >
            Remove last option
          </button>
          <button className={styles.button}>Save</button>
        </div>
      </section>
    </main>
  );
}
