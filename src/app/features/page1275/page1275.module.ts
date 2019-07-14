import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1275Component } from './page1275.component';

@NgModule({
  declarations: [Page1275Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1275Component }])],
  exports: [Page1275Component]
})
export class Page1275Module {}
