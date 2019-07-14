import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1517Component } from './page1517.component';

@NgModule({
  declarations: [Page1517Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1517Component }])],
  exports: [Page1517Component]
})
export class Page1517Module {}
