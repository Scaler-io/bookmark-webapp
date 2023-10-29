import {
  AppThemeState,
  THEME_STATE_NAME,
  themeReducer,
} from '../state/theme/theme.reducer';

export interface AppState {
  [THEME_STATE_NAME]: AppThemeState;
}

export const appReducers = {
  [THEME_STATE_NAME]: themeReducer,
};
