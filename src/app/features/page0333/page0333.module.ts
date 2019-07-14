import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0333Component } from './page0333.component';

@NgModule({
  declarations: [Page0333Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0333Component }])],
  exports: [Page0333Component]
})
export class Page0333Module {}
