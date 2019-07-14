import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0250Component } from './page0250.component';

@NgModule({
  declarations: [Page0250Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0250Component }])],
  exports: [Page0250Component]
})
export class Page0250Module {}
