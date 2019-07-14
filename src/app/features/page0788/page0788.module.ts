import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0788Component } from './page0788.component';

@NgModule({
  declarations: [Page0788Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0788Component }])],
  exports: [Page0788Component]
})
export class Page0788Module {}
