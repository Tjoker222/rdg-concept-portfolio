import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import setLanguage from "next-translate/setLanguage";
import { StorageKeys } from "../../utils/storage-keys";
import { parseCookies, setCookie } from "nookies";
import { LangProviderData, Languages } from "../../types/languages";

export const LangContext = createContext<LangProviderData>(null!);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const languages = ["english", "português"];

  const [selectedLanguage, setSelectedLanguage] = useState<"english" | "português">("português");

  const initLanguage = useCallback(() => {
    const cookies = parseCookies();
    const lang = cookies[StorageKeys.CURRENT_LANGUAGE] ?? "en";

    switch (lang) {
      case "en":
        setToEnglish();
        break;
      case "pt":
        setToPortuguese();
        break;
      default:
        setToEnglish();
    }
  }, []);

  const setToPortuguese = () => {
    setSelectedLanguage("português");
    setLanguage("pt");
  };

  const setToEnglish = () => {
    setSelectedLanguage("english");
    setLanguage("en");
  };

  const handleChangeLanguage = (newLanguage: Languages) => {
    if (newLanguage === Languages.EN) {
      setToEnglish();
      setCookie(null, StorageKeys.CURRENT_LANGUAGE, "en", {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
    } else if (newLanguage === Languages.PT) {
      setToPortuguese();
      setCookie(null, StorageKeys.CURRENT_LANGUAGE, "pt", {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
    }
  };

  useEffect(() => initLanguage(), [initLanguage]);

  return (
    <LangContext.Provider
      value={{
        handleChangeLanguage,
        languages,
        selectedLanguage,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const useLanguage = () => useContext(LangContext);
