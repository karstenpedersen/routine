export type Settings = {
  colorTheme: "auto" | "light" | "dark";
  primaryColor: string;
  keepScreenOnDuringRoutines: boolean;
};

export type SettingsKeys = keyof Settings;
