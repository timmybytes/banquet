import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  const copyright = new Date().getFullYear();
  return (
    <footer className={styles.Footer}>
      <a
        href="https://timmybytes.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by{" "}
        <span className={styles.logo}>
          <Image
            src="/avatar.svg"
            alt="timmybytes"
            width="48px"
            height="48px"
          />
        </span>
        <span>Timothy Merritt &copy; {copyright}</span>
      </a>
      {children}
    </footer>
  );
};
