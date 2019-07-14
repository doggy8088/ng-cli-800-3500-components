import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1035Component } from './page1035.component';

@NgModule({
  declarations: [Page1035Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1035Component }])],
  exports: [Page1035Component]
})
export class Page1035Module {}
