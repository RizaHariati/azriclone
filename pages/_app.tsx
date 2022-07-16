import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Layout from "../components/navbar/Layout";
import { SessionProvider } from "next-auth/react";
import { persistor, wrapper } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
