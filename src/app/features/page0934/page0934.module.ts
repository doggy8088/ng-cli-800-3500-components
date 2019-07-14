import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0934Component } from './page0934.component';

@NgModule({
  declarations: [Page0934Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0934Component }])],
  exports: [Page0934Component]
})
export class Page0934Module {}
