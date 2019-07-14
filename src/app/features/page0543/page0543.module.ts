import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0543Component } from './page0543.component';

@NgModule({
  declarations: [Page0543Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0543Component }])],
  exports: [Page0543Component]
})
export class Page0543Module {}
