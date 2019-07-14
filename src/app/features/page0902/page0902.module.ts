import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0902Component } from './page0902.component';

@NgModule({
  declarations: [Page0902Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0902Component }])],
  exports: [Page0902Component]
})
export class Page0902Module {}
