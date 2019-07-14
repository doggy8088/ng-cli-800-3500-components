import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0038Component } from './page0038.component';

@NgModule({
  declarations: [Page0038Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0038Component }])],
  exports: [Page0038Component]
})
export class Page0038Module {}
