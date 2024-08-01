import { ChangeEvent } from "react";
import styles from "./PollOption.module.css";

type PollOptionProps = {
  optionNumber: number;
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    optionNumber: number
  ) => void;
};

export default function PollOption({
  optionNumber,
  handleChange,
}: PollOptionProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={`option${optionNumber}`}>
        Option {optionNumber}
      </label>
      <input
        className={styles.input}
        type="text"
        name={`option${optionNumber}`}
        id={`option${optionNumber}`}
        onChange={(e) => handleChange(e, optionNumber)}
      />
    </div>
  );
}
