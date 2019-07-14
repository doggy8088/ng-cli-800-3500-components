import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0214Component } from './page0214.component';

@NgModule({
  declarations: [Page0214Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0214Component }])],
  exports: [Page0214Component]
})
export class Page0214Module {}
