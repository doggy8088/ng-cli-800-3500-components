import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1170Component } from './page1170.component';

@NgModule({
  declarations: [Page1170Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1170Component }])],
  exports: [Page1170Component]
})
export class Page1170Module {}
