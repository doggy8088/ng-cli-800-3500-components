import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1114Component } from './page1114.component';

@NgModule({
  declarations: [Page1114Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1114Component }])],
  exports: [Page1114Component]
})
export class Page1114Module {}
