import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2869Component } from './page2869.component';

@NgModule({
  declarations: [Page2869Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2869Component }])],
  exports: [Page2869Component]
})
export class Page2869Module {}
