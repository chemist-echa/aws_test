import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { createAuiTheme, ResetCSS } from '@ample-labs/ample-ui';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ResetCSS />
      <ThemeProvider theme={createAuiTheme({})}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
