import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
