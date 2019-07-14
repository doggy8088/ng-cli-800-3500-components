import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0407Component } from './page0407.component';

@NgModule({
  declarations: [Page0407Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0407Component }])],
  exports: [Page0407Component]
})
export class Page0407Module {}
