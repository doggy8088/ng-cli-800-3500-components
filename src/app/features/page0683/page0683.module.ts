import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0683Component } from './page0683.component';

@NgModule({
  declarations: [Page0683Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0683Component }])],
  exports: [Page0683Component]
})
export class Page0683Module {}
