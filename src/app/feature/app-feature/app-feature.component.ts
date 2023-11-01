import { Component } from '@angular/core';

@Component({
  selector: 'bookmark-app-feature',
  templateUrl: './app-feature.component.html',
  styleUrls: ['./app-feature.component.scss'],
})
export class AppFeatureComponent {
  public activeTab: string = 'panel-1';

  public toggleTab(tabName) {
    this.activeTab = tabName;
  }
}
