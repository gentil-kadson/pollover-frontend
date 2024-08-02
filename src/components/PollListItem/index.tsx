import styles from "./PollListItem.module.css";
import Image from "next/image";
import Prohibited from "/public/cantVote.svg";

type PollListItemProps = {
  id: number;
  optionText: string;
  numberOfVotes: number;
  chosenOption: { poll_option: number; user_id: number };
  handleOptionChoose: (optionId: number) => void;
  shouldDisable: boolean;
};

export default function PollListItem({
  id,
  optionText,
  numberOfVotes,
  chosenOption,
  handleOptionChoose,
  shouldDisable,
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
        disabled={shouldDisable}
        onClick={() => handleOptionChoose(id)}
      >
        {shouldDisable && (
          <Image
            src={Prohibited}
            width={30}
            height={30}
            alt="ícone de proibição"
          />
        )}
      </button>
    </li>
  );
}
