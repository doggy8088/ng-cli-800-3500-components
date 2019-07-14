import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0867Component } from './page0867.component';

@NgModule({
  declarations: [Page0867Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0867Component }])],
  exports: [Page0867Component]
})
export class Page0867Module {}
