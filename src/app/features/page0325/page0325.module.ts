import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0325Component } from './page0325.component';

@NgModule({
  declarations: [Page0325Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0325Component }])],
  exports: [Page0325Component]
})
export class Page0325Module {}
