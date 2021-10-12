/*global chrome*/
/* eslint-disable no-undef */
import Head from "next/head";

import styles from "./index.module.scss";

const SITE_SECRET = "Oxfords or Brogues?";

export default function Home() {
  const extID = "gmkcgfmaadbgpdfnkikppmoefannbmkf";

  const sendtoExt = (msg: string) => {
    console.log("attempt send message");

    chrome.runtime.sendMessage(
      extID,
      { message: msg, secret: SITE_SECRET },
      (response: any) => {
        if (response.success) {
          console.log(`WE GET SIGNAL:`, response);
        } else {
          console.log("OH NO: ", response);
        }
      }
    );
  };

  return (
    <div className={styles.Container}>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next.js template by Ivan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome</h1>
      <button onClick={() => sendtoExt("EXTENSION, WAKE UP")}>Click May</button>
    </div>
  );
}
