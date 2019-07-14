import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0020Component } from './page0020.component';

@NgModule({
  declarations: [Page0020Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0020Component }])],
  exports: [Page0020Component]
})
export class Page0020Module {}
