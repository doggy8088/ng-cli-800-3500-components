import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1628Component } from './page1628.component';

@NgModule({
  declarations: [Page1628Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1628Component }])],
  exports: [Page1628Component]
})
export class Page1628Module {}
