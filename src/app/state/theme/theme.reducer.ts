import { SET_DARK_MODE, SET_LIGHT_MODE, ThemeActions } from './theme.action';

export const THEME_STATE_NAME = 'theme';

export interface AppThemeState {
  darkMode: boolean;
}

const initialState: AppThemeState = {
  darkMode: false,
};

export function themeReducer(
  state: AppThemeState = initialState,
  action: ThemeActions
) {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: true,
      };
    case SET_LIGHT_MODE:
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
}
