import { Footer } from "@components/general/Footer";
import { ContactForm } from "@components/mantine/ContactForm";
import {
  Badge,
  Container,
  Paper,
  SegmentedControl,
  Text,
  Title,
} from "@mantine/core";
import styles from "@styles/Page.module.scss";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function Mantine() {
  const [controlValue, setControlValue] = useState("contact");

  return (
    <div className={styles.page}>
      <Head>
        <title>Main Course | Examples</title>
        <meta name="description" content="A hearty Next.js template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mantine UI</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </p>
        <Container>
          <Title align="center">Form Template</Title>
          <Title align="center" order={3}>
            A custom form for gathering data
          </Title>
          <Paper shadow="sm" padding="xl" radius={10}>
            <Badge
              color="blue"
              variant="light"
              size="lg"
              style={{ margin: ".5rem 0" }}
            >
              GETTING STARTED
            </Badge>
            <Text>
              Use Mantine's built-in components and hooks to create a pleasing
              UI with custom logic.
            </Text>
            <Paper style={{ margin: ".5rem 0" }}>
              <SegmentedControl
                value={controlValue}
                onChange={setControlValue}
                data={[
                  { label: "Contact", value: "contact" },
                  { label: "Info", value: "info" },
                  { label: "Commerce", value: "commerce" },
                  { label: "Post", value: "post" },
                ]}
                fullWidth
              />
              {controlValue === "contact" && <ContactForm />}
              {controlValue === "info" && "<InfoForm /> coming soon!"}
              {controlValue === "commerce" && "<CommerceForm /> coming soon!"}
              {controlValue === "post" && "<PostForm /> coming soon!"}
            </Paper>
          </Paper>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
