import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0483Component } from './page0483.component';

@NgModule({
  declarations: [Page0483Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0483Component }])],
  exports: [Page0483Component]
})
export class Page0483Module {}
