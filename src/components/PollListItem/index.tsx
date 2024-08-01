import styles from "./PollListItem.module.css";

type PollListItemProps = {
  id: number;
  optionText: string;
  numberOfVotes: number;
  chosenOption: { poll_option: number; user_id: number };
  handleOptionChoose: (optionId: number) => void;
};

export default function PollListItem({
  id,
  optionText,
  numberOfVotes,
  chosenOption,
  handleOptionChoose,
}: PollListItemProps) {
  return (
    <li className={styles.li}>
      <span className={styles.pollOptionText}>
        {optionText} ({numberOfVotes})
      </span>
      <button
        className={`${styles.pollOptionButton} ${
          chosenOption.poll_option === id ? styles.chosenPollItem : ""
        }`}
        onClick={() => handleOptionChoose(chosenOption.poll_option)}
      ></button>
    </li>
  );
}
