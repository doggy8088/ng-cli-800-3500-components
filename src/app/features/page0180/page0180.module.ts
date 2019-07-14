import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0180Component } from './page0180.component';

@NgModule({
  declarations: [Page0180Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0180Component }])],
  exports: [Page0180Component]
})
export class Page0180Module {}
