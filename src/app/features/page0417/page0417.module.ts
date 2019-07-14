import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0417Component } from './page0417.component';

@NgModule({
  declarations: [Page0417Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0417Component }])],
  exports: [Page0417Component]
})
export class Page0417Module {}
