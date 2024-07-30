import styles from "./PollOption.module.css";

type PollOptionProps = {
  optionNumber: number;
};

export default function PollOption({ optionNumber }: PollOptionProps) {
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
      />
    </div>
  );
}
