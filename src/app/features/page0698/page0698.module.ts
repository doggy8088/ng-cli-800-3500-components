import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0698Component } from './page0698.component';

@NgModule({
  declarations: [Page0698Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0698Component }])],
  exports: [Page0698Component]
})
export class Page0698Module {}
