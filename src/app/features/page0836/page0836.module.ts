import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0836Component } from './page0836.component';

@NgModule({
  declarations: [Page0836Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0836Component }])],
  exports: [Page0836Component]
})
export class Page0836Module {}
