import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProviders } from "./_appProviders";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders pageProps={pageProps}>
      <Component {...pageProps} />
    </AppProviders>
  );
}
