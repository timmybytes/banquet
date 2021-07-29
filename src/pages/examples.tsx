import { Footer } from "@components/general/Footer";
import styles from "@styles/Page.module.scss";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Main Course | Examples</title>
        <meta name="description" content="A hearty Next.js template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Examples</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </p>
        <div className={styles.description}>
          <h2>Dummy text</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
            ea nemo cupiditate officiis totam a accusamus, sint, sunt
            praesentium tenetur eveniet neque repudiandae consequuntur eius
            error minima perspiciatis cumque unde?
          </p>
          <h2>Code</h2>
          <pre>
            <code>const something = (x) ={">"} return x</code>
          </pre>
        </div>
      </main>

      <Footer />
    </div>
  );
}
