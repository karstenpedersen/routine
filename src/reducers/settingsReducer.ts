import { DEFAULT_SETTINGS } from "@/constants/settings";
import { SettingsKeys } from "@/types/settings";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const routineSlice = createSlice({
  name: "settings",
  initialState: DEFAULT_SETTINGS,
  reducers: {
    resetSettings: (state) => {
      state = DEFAULT_SETTINGS;
    },
    // resetSetting: (state, action: PayloadAction<SettingsKeys>) => {
    //   state[action.payload] = DEFAULT_SETTINGS[action.payload];
    // },
    // setSetting: (state, action: PayloadAction<{ key: string; value: any }>) => {
    //   state[action.payload.key] = action.payload.value;
    // },
  },
});

export const { resetSettings } = routineSlice.actions;

export default routineSlice.reducer;
