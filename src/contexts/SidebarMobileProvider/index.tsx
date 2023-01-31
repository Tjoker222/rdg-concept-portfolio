import { createContext, ReactNode, useContext, useState } from "react";
import {
  SidebarMobileType,
  SidebarMobileContextData,
} from "../../types/sidebar-mobile";

const SidebarMobileContext = createContext<SidebarMobileContextData>(
  {} as SidebarMobileContextData
);

export const SidebarMobileProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [CurrentSidebarState, setCurrentSidebarState] =
    useState<SidebarMobileType>(SidebarMobileType.CLOSE);

  return (
    <SidebarMobileContext.Provider
      value={{ CurrentSidebarState, setCurrentSidebarState }}
    >
      {children}
    </SidebarMobileContext.Provider>
  );
};

export const useSidebarMobileContext = () => useContext(SidebarMobileContext);
