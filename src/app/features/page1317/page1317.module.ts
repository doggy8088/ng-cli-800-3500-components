import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1317Component } from './page1317.component';

@NgModule({
  declarations: [Page1317Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1317Component }])],
  exports: [Page1317Component]
})
export class Page1317Module {}
