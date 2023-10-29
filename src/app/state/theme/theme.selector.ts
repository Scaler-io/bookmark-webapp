import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppThemeState, THEME_STATE_NAME } from './theme.reducer';

const state = createFeatureSelector<AppThemeState>(THEME_STATE_NAME);

export const getCurrentTheme = createSelector(state, (state) => {
  return state.darkMode;
});
