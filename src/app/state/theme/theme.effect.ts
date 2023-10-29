import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SET_DARK_MODE, SET_LIGHT_MODE, ThemeActions } from './theme.action';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeEffect {
  themeEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SET_DARK_MODE, SET_LIGHT_MODE),
        tap((action: ThemeActions) => {
          window.localStorage.setItem(
            'theme',
            action.type === 'SET_DARK_MODE' ? 'dark' : 'light'
          );
        })
      );
    },
    { dispatch: false }
  );
  constructor(private actions$: Actions) {}
}
