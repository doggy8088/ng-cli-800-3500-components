import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1491Component } from './page1491.component';

@NgModule({
  declarations: [Page1491Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1491Component }])],
  exports: [Page1491Component]
})
export class Page1491Module {}
