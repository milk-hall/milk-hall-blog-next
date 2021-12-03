import BasicLayout from "@/layouts/BasicLayout";

export default function App({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}
