import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0572Component } from './page0572.component';

@NgModule({
  declarations: [Page0572Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0572Component }])],
  exports: [Page0572Component]
})
export class Page0572Module {}
