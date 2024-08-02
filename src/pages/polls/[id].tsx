import styles from "../../styles/Poll.module.css";
import Head from "next/head";
import Link from "next/link";
import PollListItem from "@/components/PollListItem";
import api from "../api/axios";
import socket from "@/services/socket";
import { UserIdContext } from "../_app";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

type OptionData = {
  id: number;
  text: string;
  votes_count: number;
  poll_id: number;
};

export default function Poll() {
  const router = useRouter();
  const { userId } = useContext(UserIdContext);
  const [optionsData, setOptionsData] = useState<OptionData[]>([]);
  const [chosenOption, setChosenOption] = useState<{
    poll_option: number;
    user_id: number;
  }>({
    poll_option: 0,
    user_id: userId,
  });
  const [usersWhoVoted, setUsersWhoVoted] = useState<
    { id: number; username: string }[]
  >([]);
  const [shouldDisable, setShouldDisable] = useState<boolean>(false);
  const [pollTitle, setPollTitle] = useState<string>("");

  useEffect(() => {
    async function getData() {
      let pollName = "";
      await api.get(`/polls/${router.query.id}`).then((response) => {
        const pollOptions: OptionData[] = response.data.poll_options;
        pollOptions.sort((firstE, secondE) => firstE.id - secondE.id);
        setOptionsData(pollOptions);

        setUsersWhoVoted(response.data.users);
        setPollTitle(response.data.title);

        pollName = response.data.title;
      });

      socket.emit("joinPoll", pollName);
    }
    getData();

    socket.on("updatePollVotes", (poll) => {
      const updatedPoll: OptionData[] = poll.poll_options;
      updatedPoll.sort((firstE, secondE) => firstE.id - secondE.id);
      setOptionsData(updatedPoll);
    });
  }, []);

  useEffect(() => {
    if (usersWhoVoted.length > 0) {
      const found = usersWhoVoted.filter(
        (user) => user.id === chosenOption.user_id
      );
      if (found.length === 1) {
        setShouldDisable(true);
      }
    }
  }, [usersWhoVoted]);

  useEffect(() => {
    if (chosenOption.poll_option !== 0) {
      api
        .post(`/polls/${router.query.id}/vote`, {
          poll_option: chosenOption.poll_option,
          user_id: chosenOption.user_id,
        })
        .then((success) => {
          setShouldDisable(true);
        });
    }
  }, [chosenOption]);

  function handleOptionChoose(optionId: number) {
    optionsData.forEach((option) => {
      if (option.id === optionId || optionId === 0) {
        setChosenOption((prevState) => {
          return { ...prevState, poll_option: optionId };
        });
      }
    });
  }

  function handleLeavingPoll() {
    socket.emit("leavePoll", pollTitle);
  }

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
          <h1 className={styles.title}>{pollTitle}</h1>
          <ul className={styles.ul}>
            {optionsData.map((optionData) => (
              <PollListItem
                shouldDisable={shouldDisable}
                id={optionData.id}
                key={optionData.id}
                optionText={optionData.text}
                numberOfVotes={optionData.votes_count}
                chosenOption={chosenOption}
                handleOptionChoose={handleOptionChoose}
              />
            ))}
          </ul>
          <Link href="/" onClick={handleLeavingPoll}>
            <button className={styles.homeButton}>Home</button>
          </Link>
        </section>
      </main>
    </>
  );
}
