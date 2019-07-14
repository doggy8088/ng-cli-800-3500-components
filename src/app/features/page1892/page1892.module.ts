import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1892Component } from './page1892.component';

@NgModule({
  declarations: [Page1892Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1892Component }])],
  exports: [Page1892Component]
})
export class Page1892Module {}
