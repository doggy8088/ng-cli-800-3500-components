import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0021Component } from './page0021.component';

@NgModule({
  declarations: [Page0021Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0021Component }])],
  exports: [Page0021Component]
})
export class Page0021Module {}
