import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1288Component } from './page1288.component';

@NgModule({
  declarations: [Page1288Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1288Component }])],
  exports: [Page1288Component]
})
export class Page1288Module {}
