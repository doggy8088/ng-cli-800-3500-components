import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1597Component } from './page1597.component';

@NgModule({
  declarations: [Page1597Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1597Component }])],
  exports: [Page1597Component]
})
export class Page1597Module {}
