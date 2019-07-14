import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0403Component } from './page0403.component';

@NgModule({
  declarations: [Page0403Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0403Component }])],
  exports: [Page0403Component]
})
export class Page0403Module {}
