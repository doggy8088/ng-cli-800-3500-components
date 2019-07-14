import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0406Component } from './page0406.component';

@NgModule({
  declarations: [Page0406Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0406Component }])],
  exports: [Page0406Component]
})
export class Page0406Module {}
