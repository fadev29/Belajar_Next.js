import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
/** _app.js dibuat otomatis oleh nextjs
 * fungsi nya buat menerapkan perilaku/elemen global yang dibutuhin semua halaman
 * 1. untuk mengatuk layout global
 * 2. untuk mengelolah state global
 * 3.mengunakan css global yang belaku di semua halman
 */
