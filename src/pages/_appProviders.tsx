import DefaultLayout from "../components/Layouts/DefaultLayout";

export function AppProviders({
  children,
  pageProps,
}: {
  children: JSX.Element;
  pageProps: any;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
