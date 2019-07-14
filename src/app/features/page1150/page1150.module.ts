import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1150Component } from './page1150.component';

@NgModule({
  declarations: [Page1150Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1150Component }])],
  exports: [Page1150Component]
})
export class Page1150Module {}
