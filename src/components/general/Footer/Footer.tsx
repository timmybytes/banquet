import Image from 'next/image';
import React from 'react';
import styles from './Footer.module.scss';

type FooterProps = {
  children: React.ReactNode;
};

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer className={styles.Footer}>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'>
        Powered by{' '}
        <span className={styles.logo}>
          <Image
            src='/next-dish.svg'
            alt='Vercel Logo'
            width={72}
            height={16}
          />
        </span>
      </a>
      {children}
    </footer>
  );
};
