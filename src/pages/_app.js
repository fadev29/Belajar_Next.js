import { setIsLargeScreen, setIsMobileScreen } from "@/redux/screenSlice/screenSlice";
import store from "@/redux/store";
import "@/styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    function handleResize() {
      // dispatch : aksi yang memicu pembaruan nilai state
      store.dispatch(setIsMobileScreen(window.innerWidth < 768));
      store.dispatch(setIsLargeScreen(window.innerWidth >= 1240));
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
