import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0937Component } from './page0937.component';

@NgModule({
  declarations: [Page0937Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0937Component }])],
  exports: [Page0937Component]
})
export class Page0937Module {}
