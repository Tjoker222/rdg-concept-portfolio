export enum SidebarMobileType {
  OPEN = "open",
  CLOSE = "close",
}

export type SidebarMobileContextData = {
  CurrentSidebarState: SidebarMobileType;
  setCurrentSidebarState: (state: SidebarMobileType) => void;
};
