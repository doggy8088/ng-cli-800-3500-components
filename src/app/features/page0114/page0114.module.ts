import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0114Component } from './page0114.component';

@NgModule({
  declarations: [Page0114Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0114Component }])],
  exports: [Page0114Component]
})
export class Page0114Module {}
