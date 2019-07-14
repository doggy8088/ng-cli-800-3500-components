import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0328Component } from './page0328.component';

@NgModule({
  declarations: [Page0328Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0328Component }])],
  exports: [Page0328Component]
})
export class Page0328Module {}
