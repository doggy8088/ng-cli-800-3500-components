import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0435Component } from './page0435.component';

@NgModule({
  declarations: [Page0435Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0435Component }])],
  exports: [Page0435Component]
})
export class Page0435Module {}
