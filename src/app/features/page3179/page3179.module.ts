import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3179Component } from './page3179.component';

@NgModule({
  declarations: [Page3179Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3179Component }])],
  exports: [Page3179Component]
})
export class Page3179Module {}
