import { ResponsiveLayoutProvider } from "@/contexts/ResponsiveLayoutProvider";
import { SidebarMobileProvider } from "@/contexts/SidebarMobileProvider";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/Layouts/DefaultLayout";

export function AppProviders({
  children,
  pageProps,
}: {
  children: JSX.Element;
  pageProps: any;
}) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ResponsiveLayoutProvider>
        <SidebarMobileProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </SidebarMobileProvider>
      </ResponsiveLayoutProvider>
    );
  }
}
