import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../services/gtag'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../services/apollo-client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

  import "../style/normalize.css"
  import "../style/all.scss"
  
  export default function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState);
    const router = useRouter()
    
    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])

    return (
      <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
      </ApolloProvider>
    );
  }
