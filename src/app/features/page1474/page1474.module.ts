import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1474Component } from './page1474.component';

@NgModule({
  declarations: [Page1474Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1474Component }])],
  exports: [Page1474Component]
})
export class Page1474Module {}
