import styles from "./PollCreationForm.module.css";
import PollOption from "../PollOption";
import { useEffect, useState } from "react";

type PollCreationFormProps = {
  options: { optionNumber: number; key: number }[];
};

type PollForm = {
  title: string;
  poll_options: { title: string }[];
};

export default function PollCreationForm({ options }: PollCreationFormProps) {
  const [pollFormData, setPollFormData] = useState<PollForm>({} as PollForm);

  // options.forEach((option) => {
  //   setPollFormData((prevState) => {
  //     const updatedOptionsData = [...prevState];
  //     updatedOptionsData.push();
  //   });
  // });

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
          onChange={(event) => {
            setPollFormData((prevState) => {
              const newForm = { ...prevState, title: event.target.value };
              return newForm;
            });
          }}
        />
      </div>
      <section className={styles.pollOptions}>
        {options.map((option) => (
          <PollOption optionNumber={option.optionNumber} key={option.key} />
        ))}
      </section>
    </form>
  );
}
