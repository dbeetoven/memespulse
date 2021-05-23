import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../services/apollo-client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

  import "../style/normalize.css"
  import "../style/all.scss"
  
  export default function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
      <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
      </ApolloProvider>
    );
  }
