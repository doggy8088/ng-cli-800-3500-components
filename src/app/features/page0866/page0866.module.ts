import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0866Component } from './page0866.component';

@NgModule({
  declarations: [Page0866Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0866Component }])],
  exports: [Page0866Component]
})
export class Page0866Module {}
