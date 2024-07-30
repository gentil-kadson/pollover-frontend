import styles from "../../styles/Poll.module.css";
import Head from "next/head";
import Link from "next/link";
import PollListItem from "@/components/PollListItem";

export default function Poll() {
  return (
    <>
      <Head>
        <title>Create Poll</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.pollOptionsSection}>
          <h1 className={styles.title}>Poll Title</h1>
          <ul className={styles.ul}>
            <PollListItem optionText="Buried Alive" numberOfVotes={30} />
            <PollListItem optionText="Buried Alive" numberOfVotes={30} />
            <PollListItem optionText="Buried Alive" numberOfVotes={30} />
            <PollListItem optionText="Buried Alive" numberOfVotes={30} />
          </ul>
          <Link href="/">
            <button className={styles.homeButton}>Home</button>
          </Link>
        </section>
      </main>
    </>
  );
}
