import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0958Component } from './page0958.component';

@NgModule({
  declarations: [Page0958Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0958Component }])],
  exports: [Page0958Component]
})
export class Page0958Module {}
