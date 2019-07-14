import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0182Component } from './page0182.component';

@NgModule({
  declarations: [Page0182Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0182Component }])],
  exports: [Page0182Component]
})
export class Page0182Module {}
