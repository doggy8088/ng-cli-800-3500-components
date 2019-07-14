import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1869Component } from './page1869.component';

@NgModule({
  declarations: [Page1869Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1869Component }])],
  exports: [Page1869Component]
})
export class Page1869Module {}
