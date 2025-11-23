import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 'Tableau de bord',
  currentFilter: 'TOUT',
  pageInfo: {
    'Tableau de bord': {
      title: 'Tableau de bord',
      subtitle: 'Tableau de bord et résumé de la gestion des matériels'
    },
    'Matériels': {
      title: 'Matériels',
      subtitle: 'Gérer et organiser tous les matériels'
    },
    'Fiches': {
      title: 'Fiches',
      subtitle: 'Accéder et gérer les documents associés'
    },
    'Tâches':{
        title: 'Tâches',
        subtitle: 'Gérer et suivre les tâches'
    }
  }
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    }
  }
});

export const { setActivePage, setCurrentFilter } = uiSlice.actions;
export default uiSlice.reducer; 