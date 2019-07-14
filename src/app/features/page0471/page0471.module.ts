import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0471Component } from './page0471.component';

@NgModule({
  declarations: [Page0471Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0471Component }])],
  exports: [Page0471Component]
})
export class Page0471Module {}
