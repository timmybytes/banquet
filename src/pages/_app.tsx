import { GlobalStyles, MantineProvider, NormalizeCSS } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { createGenerateId, JssProvider } from 'react-jss';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById('mantine-ssr-styles');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <JssProvider generateId={createGenerateId({ minify: true })}>
        <Head>
          <title>Mantine next example</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>

        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}>
          <NormalizeCSS />
          <GlobalStyles />
          <Component {...pageProps} />
        </MantineProvider>
      </JssProvider>
    </>
  );
}
