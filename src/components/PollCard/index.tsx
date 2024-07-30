import styles from "./PollCard.module.css";

export default function PollCard() {
  return (
    <div className={styles.cardWrapper}>
      <h2>Best ADS teacher</h2>
      <p>
        <strong>Total votes:</strong> 300
      </p>
    </div>
  );
}
