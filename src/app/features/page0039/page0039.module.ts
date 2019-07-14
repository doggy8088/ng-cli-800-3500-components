import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0039Component } from './page0039.component';

@NgModule({
  declarations: [Page0039Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0039Component }])],
  exports: [Page0039Component]
})
export class Page0039Module {}
