import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1546Component } from './page1546.component';

@NgModule({
  declarations: [Page1546Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1546Component }])],
  exports: [Page1546Component]
})
export class Page1546Module {}
