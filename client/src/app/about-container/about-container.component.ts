import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about-container',
  template: ` <div id="container">
    <strong>{{ name }}</strong>
    <p>
      Created By
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/stevenxchung"
        >Steven Chung</a
      >
    </p>
  </div>`,
  styleUrls: ['./about-container.component.scss'],
})
export class AboutContainerComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}
