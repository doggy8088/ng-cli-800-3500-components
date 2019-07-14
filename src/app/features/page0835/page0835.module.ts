import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0835Component } from './page0835.component';

@NgModule({
  declarations: [Page0835Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0835Component }])],
  exports: [Page0835Component]
})
export class Page0835Module {}
