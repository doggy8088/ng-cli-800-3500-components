import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1542Component } from './page1542.component';

@NgModule({
  declarations: [Page1542Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1542Component }])],
  exports: [Page1542Component]
})
export class Page1542Module {}
