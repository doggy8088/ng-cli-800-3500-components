import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0042Component } from './page0042.component';

@NgModule({
  declarations: [Page0042Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0042Component }])],
  exports: [Page0042Component]
})
export class Page0042Module {}
