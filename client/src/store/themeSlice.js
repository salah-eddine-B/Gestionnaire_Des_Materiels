import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  isMinimized: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleMinimize: (state) => {
      state.isMinimized = !state.isMinimized;
    },
  },
});

export const { toggleDarkMode, toggleMinimize } = themeSlice.actions;
export default themeSlice.reducer;
