import { Component } from '@angular/core';
import { Constants } from './constants';

@Component({
  selector: 'home-page',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="back" [fullscreen]="true">
      <ion-content class="front" [fullscreen]="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Home</ion-title>
          </ion-toolbar>
        </ion-header>
        <div class="home-page-container">
          <h1>Poetry</h1>
          <p [innerHTML]="poemOfTheMonth"></p>
        </div>
      </ion-content>
    </ion-content>
  `,
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  poemOfTheMonth: string;
  getFormattedPoem = (): string => {
    const separators = ['\\,', '\\.', '\\?'];
    const stringToArray = Constants.POTM.split(
      new RegExp(separators.join('|'), 'g')
    );

    let count = 0;
    stringToArray.forEach((s, i) => {
      count += 1;
      if (count === 4 && i === stringToArray.length - 2) {
        stringToArray[i] = s + `.<br/><br/>`;
        count = 0;
      } else if (count === 4) {
        stringToArray[i] = s + `,<br/><br/>`;
        count = 0;
      } else if (i !== stringToArray.length - 1) {
        stringToArray[i] = s + `,<br/>`;
      }
    });

    return stringToArray.join('');
  };

  constructor() {
    this.poemOfTheMonth = this.getFormattedPoem();
  }
}
