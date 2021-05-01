import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'home-page',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
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
          <h1 class="poem-header">Monthly Poetry</h1>
          <p class="poem-of-the-month" [innerHTML]="poemOfTheMonth"></p>
        </div>
      </ion-content>
    </ion-content>
  `,
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  poemOfTheMonth: string;

  constructor(private content: ContentService) {
    content
      .getPoemOfTheMonth()
      .subscribe(
        (res) => (this.poemOfTheMonth = this.getFormattedPoem(res[0].poem))
      );
  }

  // Helper method to format poem from DB
  getFormattedPoem = (poem: string): string => {
    const separatorMap = { ',': ',+', '.': '.+', '?': '?+' };
    const separatorReplacedPoem = poem.replace(
      /[,.?]/g,
      (s) => separatorMap[s]
    );
    const stringToArray = separatorReplacedPoem.split('+');

    let count = 0;
    stringToArray.forEach((s, i) => {
      count += 1;
      if (count === 4) {
        stringToArray[i] = s + `<br/><br/>`;
        count = 0;
      } else if (i !== stringToArray.length - 1) {
        stringToArray[i] = s + `<br/>`;
      }
    });

    return stringToArray.join('');
  };
}
