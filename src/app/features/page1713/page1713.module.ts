import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1713Component } from './page1713.component';

@NgModule({
  declarations: [Page1713Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1713Component }])],
  exports: [Page1713Component]
})
export class Page1713Module {}
