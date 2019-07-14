import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0948Component } from './page0948.component';

@NgModule({
  declarations: [Page0948Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0948Component }])],
  exports: [Page0948Component]
})
export class Page0948Module {}
