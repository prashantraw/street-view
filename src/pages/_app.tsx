// pages/_app.tsx
import '../styles/globals.css';
import '../styles/slider.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
