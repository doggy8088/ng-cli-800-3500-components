import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1225Component } from './page1225.component';

@NgModule({
  declarations: [Page1225Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1225Component }])],
  exports: [Page1225Component]
})
export class Page1225Module {}
