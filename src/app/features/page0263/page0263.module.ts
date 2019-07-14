import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0263Component } from './page0263.component';

@NgModule({
  declarations: [Page0263Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0263Component }])],
  exports: [Page0263Component]
})
export class Page0263Module {}
