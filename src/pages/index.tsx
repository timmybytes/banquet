import {
  Accordion,
  AccordionItem,
  Container,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Course</title>
        <meta name="description" content="A hearty Next.js template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        style={{
          padding: "2rem",
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          shadow="lg"
          style={{
            padding: "2rem",
            height: "80%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Title
            align="center"
            order={1}
            style={{
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontSize: "3rem",
            }}
          >
            Welcome to Main Course!
          </Title>

          <Text style={{ maxWidth: "65ch", padding: "1rem" }}>
            This is a template for building a static site with Next, Plop,
            Mantine UI, Typescript, and Jest/React Testing Library.
          </Text>

          <Title
            align="center"
            order={2}
            style={{
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              padding: "1rem",
              fontSize: "2.5rem",
            }}
          >
            Menu
          </Title>
          <Accordion>
            <AccordionItem label="Next.js Features">
              <a href="https://nextjs.org">Next.js</a> features performance
              optimization, static site generation, routing, image optimization,
              and more.
            </AccordionItem>
            <AccordionItem label="Automate creation of components, pages, etc.">
              <a href="https://plopjs.com">Plop.js</a> is a tool for creating
              React components, pages, and more.
            </AccordionItem>
            <AccordionItem label="Mantine UI">
              <a href="https://mantine.dev">Mantine</a> is a set of React
              components and custom hooks for building user interfaces.
            </AccordionItem>
          </Accordion>
        </Paper>
      </Container>
    </>
  );
}
