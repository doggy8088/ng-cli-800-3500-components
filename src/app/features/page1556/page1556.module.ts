import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1556Component } from './page1556.component';

@NgModule({
  declarations: [Page1556Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1556Component }])],
  exports: [Page1556Component]
})
export class Page1556Module {}
