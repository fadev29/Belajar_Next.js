import { isMobileScreenAtom } from "@/atoms/atoms";
import { setIsLargeScreen, setIsMobileScreen } from "@/redux/screenSlice/screenSlice";
import store from "@/redux/store";
import "@/styles/globals.css";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const setIsMobileScreenAtom = useSetAtom(isMobileScreenAtom);
  useEffect(() => {
    function handleResize() {
      // dispatch : aksi yang memicu pembaruan nilai state
      store.dispatch(setIsMobileScreen(window.innerWidth < 768));
      store.dispatch(setIsLargeScreen(window.innerWidth >= 1240));
      setIsMobileScreenAtom(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreenAtom]);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
/** _app.js dibuat otomatis oleh nextjs
 * fungsi nya buat menerapkan perilaku/elemen global yang dibutuhin semua halaman
 * 1. untuk mengatuk layout global
 * 2. untuk mengelolah state global
 * 3.mengunakan css global yang belaku di semua halman
 */
