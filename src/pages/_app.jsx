import AppShell from "@/components/organisms/AppShell";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppShell>
      <Component {...pageProps} />;
    </AppShell>
  );
}
