import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { isMobile as isMobileDetect } from "react-device-detect";

type ResponsiveLayoutContextData = {
  isMobile: boolean;
};

export const ResponsiveLayoutContext = createContext({} as ResponsiveLayoutContextData);

export function ResponsiveLayoutProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(isMobileDetect);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <ResponsiveLayoutContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveLayoutContext.Provider>
  );
}

export const useResponsiveLayout = () => useContext(ResponsiveLayoutContext);

