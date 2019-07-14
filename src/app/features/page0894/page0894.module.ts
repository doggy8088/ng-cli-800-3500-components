import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0894Component } from './page0894.component';

@NgModule({
  declarations: [Page0894Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0894Component }])],
  exports: [Page0894Component]
})
export class Page0894Module {}
