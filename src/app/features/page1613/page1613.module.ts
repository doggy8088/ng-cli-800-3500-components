import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1613Component } from './page1613.component';

@NgModule({
  declarations: [Page1613Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1613Component }])],
  exports: [Page1613Component]
})
export class Page1613Module {}
