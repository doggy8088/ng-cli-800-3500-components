import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1452Component } from './page1452.component';

@NgModule({
  declarations: [Page1452Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1452Component }])],
  exports: [Page1452Component]
})
export class Page1452Module {}
