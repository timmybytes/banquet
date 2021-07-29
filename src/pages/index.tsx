import { Footer } from "@components/general/Footer";
import { Card } from "@mantine/core";
import styles from "@styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Course</title>
        <meta name="description" content="A hearty Next.js template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Main Course!</h1>

        <p className={styles.description}>
          Visit the{" "}
          <Link href="/examples">
            <a>Examples page</a>
          </Link>
        </p>
        <p className={styles.description}>
          Visit the{" "}
          <Link href="/mantine">
            <a>Mantine UI page</a>
          </Link>
        </p>

        <div className={styles.grid}>
          <Card shadow="sm" padding={30}>
            <a href="/">
              <h2>Get Started</h2>
              <p>
                Start building your Next.js + TypeScript + Mantine + CSS Modules
                + Plop app
              </p>
            </a>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
