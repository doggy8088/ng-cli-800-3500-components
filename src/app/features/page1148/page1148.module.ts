import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1148Component } from './page1148.component';

@NgModule({
  declarations: [Page1148Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1148Component }])],
  exports: [Page1148Component]
})
export class Page1148Module {}
