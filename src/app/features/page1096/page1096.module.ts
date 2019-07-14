import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1096Component } from './page1096.component';

@NgModule({
  declarations: [Page1096Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1096Component }])],
  exports: [Page1096Component]
})
export class Page1096Module {}
