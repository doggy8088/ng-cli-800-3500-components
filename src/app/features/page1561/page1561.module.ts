import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1561Component } from './page1561.component';

@NgModule({
  declarations: [Page1561Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1561Component }])],
  exports: [Page1561Component]
})
export class Page1561Module {}
