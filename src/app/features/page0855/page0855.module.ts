import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0855Component } from './page0855.component';

@NgModule({
  declarations: [Page0855Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0855Component }])],
  exports: [Page0855Component]
})
export class Page0855Module {}
