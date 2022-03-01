import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import './normalize.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  console.log('_app', { Component, pageProps });
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Welcome to nextjs!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default App;
