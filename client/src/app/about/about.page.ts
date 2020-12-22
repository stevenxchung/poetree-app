import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>About</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="back" [fullscreen]="true">
      <ion-content class="front" [fullscreen]="true">
        <about-container name="GitHub"></about-container>
      </ion-content>
    </ion-content>
  `,
  styleUrls: ['about.page.scss'],
})
export class AboutPage {
  constructor() {}
}
