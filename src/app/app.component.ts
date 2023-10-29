import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { getCurrentTheme } from './state/theme/theme.selector';
import { SetDarkMode, SetLightMode } from './state/theme/theme.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private isDarkMode: boolean;
  constructor(private store: Store<AppState>) {}

  @HostBinding('class.dark') get currentTheme() {
    return this.isDarkMode;
  }

  private subscriptions = {
    theme: null,
  };

  ngOnInit(): void {
    this.store
      .select(getCurrentTheme)
      .subscribe((res) => (this.isDarkMode = res));

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        this.store.dispatch(new SetDarkMode());
      } else if (savedTheme === 'light') {
        this.isDarkMode = false;
        this.store.dispatch(new SetLightMode());
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions.theme) this.subscriptions.theme.unsubscribe();
  }
}
