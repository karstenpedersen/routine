import { Settings } from "@/types/settings";
import PALETTE from "../palette";

const DEFAULT_SETTINGS: Settings = {
  colorTheme: "auto",
  primaryColor: PALETTE.primary.DEFAULT,
  keepScreenOnDuringRoutines: false,
};

export default DEFAULT_SETTINGS;
