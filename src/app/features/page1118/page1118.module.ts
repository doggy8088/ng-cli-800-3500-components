import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1118Component } from './page1118.component';

@NgModule({
  declarations: [Page1118Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1118Component }])],
  exports: [Page1118Component]
})
export class Page1118Module {}
