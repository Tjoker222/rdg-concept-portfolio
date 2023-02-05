export type LangProviderData = {
  handleChangeLanguage: (newLanguage: Languages) => void;
  languages: string[];
  selectedLanguage: string;
};

export enum Languages {
  EN = "en",
  PT = "pt",
}
