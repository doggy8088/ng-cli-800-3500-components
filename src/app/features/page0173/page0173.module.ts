import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0173Component } from './page0173.component';

@NgModule({
  declarations: [Page0173Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0173Component }])],
  exports: [Page0173Component]
})
export class Page0173Module {}
