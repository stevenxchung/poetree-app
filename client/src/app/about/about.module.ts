import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutContainerComponentModule } from '../about-container/about-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    AboutContainerComponentModule,
  ],
  declarations: [AboutPage],
})
export class AboutPageModule {}
