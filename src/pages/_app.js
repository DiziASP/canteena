import { initialState } from "@/context/initialState";
import reducer from "@/context/reducer";
import { StateProvider } from "@/context/StateProvider";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </AnimatePresence>
  );
}

export default MyApp;
