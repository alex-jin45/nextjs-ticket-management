import "../styles/globals.css";

import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  switch (Component.displayName) {
    case "HomePage":
      return <Component {...pageProps} />;

    default:
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
  }
}
