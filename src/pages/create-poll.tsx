import PollOption from "@/components/PollOption";
import styles from "../styles/CreatePoll.module.css";
import Head from "next/head";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import api from "./api/axios";

type Option = {
  optionNumber: number;
  title: string;
};

export default function CreatePoll() {
  const router = useRouter();
  const [pollTitle, setPollTitle] = useState<string>("");
  const [options, setOptions] = useState<Option[]>([
    { optionNumber: 1, title: "" },
    { optionNumber: 2, title: "" },
  ]);

  function handleOptionTitleChange(
    e: ChangeEvent<HTMLInputElement>,
    optionNumber: number
  ) {
    const nextOptions = options.map((option, index) => {
      if (option.optionNumber == optionNumber) {
        return { ...option, title: e.target.value };
      } else {
        return { ...option };
      }
    });
    setOptions(nextOptions);
  }

  function handleAddOption() {
    const optionNumber = options.length + 1;
    const optionObj = { title: "", optionNumber };
    setOptions((prevState) => {
      return [...prevState, optionObj];
    });
  }

  function handleRemoveLastOption() {
    const lastOption = options[options.length - 1];
    const updatedOptions = options.filter(
      (option) => option.optionNumber !== lastOption.optionNumber
    );
    setOptions(updatedOptions);
  }

  function handlePollCreation() {
    const treatedOptions = options.map((option) => {
      return { text: option.title };
    });
    api
      .post("/polls", {
        title: pollTitle,
        poll_options: treatedOptions,
      })
      .then((success) => {
        router.push("/");
      })
      .catch((err) => console.log(err));
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
        <section className={styles.section}>
          <h1 className={styles.title}>Poll Creation</h1>
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
                onChange={(e) => setPollTitle(e.target.value)}
              />
            </div>
            <section className={styles.pollOptions}>
              {options.map((option) => (
                <PollOption
                  optionNumber={option.optionNumber}
                  key={option.optionNumber}
                  handleChange={handleOptionTitleChange}
                />
              ))}
            </section>
          </form>
          <div className={styles.buttonsContainer}>
            <button className={styles.button} onClick={handleAddOption}>
              Add option
            </button>
            <button
              className={styles.button}
              onClick={handleRemoveLastOption}
              disabled={options.length > 2 ? false : true}
            >
              Remove last option
            </button>
            <button className={styles.button} onClick={handlePollCreation}>
              Save
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
