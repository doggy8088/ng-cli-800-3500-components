import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1634Component } from './page1634.component';

@NgModule({
  declarations: [Page1634Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1634Component }])],
  exports: [Page1634Component]
})
export class Page1634Module {}
