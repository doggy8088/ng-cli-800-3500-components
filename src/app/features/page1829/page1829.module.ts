import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1829Component } from './page1829.component';

@NgModule({
  declarations: [Page1829Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1829Component }])],
  exports: [Page1829Component]
})
export class Page1829Module {}
