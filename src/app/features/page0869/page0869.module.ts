import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0869Component } from './page0869.component';

@NgModule({
  declarations: [Page0869Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0869Component }])],
  exports: [Page0869Component]
})
export class Page0869Module {}
