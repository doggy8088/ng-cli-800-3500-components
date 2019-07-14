import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1727Component } from './page1727.component';

@NgModule({
  declarations: [Page1727Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1727Component }])],
  exports: [Page1727Component]
})
export class Page1727Module {}
