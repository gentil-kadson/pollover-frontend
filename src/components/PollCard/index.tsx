import styles from "./PollCard.module.css";

type PollCardProps = {
  pollTitle: string;
  totalVotes: number;
};

export default function PollCard({ pollTitle, totalVotes }: PollCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <h2>{pollTitle}</h2>
      <p>
        <strong>Total votes:</strong> {totalVotes}
      </p>
    </div>
  );
}
