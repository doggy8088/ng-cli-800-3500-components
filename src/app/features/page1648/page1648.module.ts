import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1648Component } from './page1648.component';

@NgModule({
  declarations: [Page1648Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1648Component }])],
  exports: [Page1648Component]
})
export class Page1648Module {}
