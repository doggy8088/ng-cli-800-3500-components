import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0458Component } from './page0458.component';

@NgModule({
  declarations: [Page0458Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0458Component }])],
  exports: [Page0458Component]
})
export class Page0458Module {}
