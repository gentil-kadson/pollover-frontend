import styles from "./PollListItem.module.css";

type PollListItemProps = {
  optionText: string;
  numberOfVotes: number;
};

export default function PollListItem({
  optionText,
  numberOfVotes,
}: PollListItemProps) {
  return (
    <li className={styles.li}>
      <span className={styles.pollOptionText}>
        {optionText} ({numberOfVotes})
      </span>
      <button className={styles.pollOptionButton}></button>
    </li>
  );
}
