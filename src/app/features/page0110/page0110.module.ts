import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0110Component } from './page0110.component';

@NgModule({
  declarations: [Page0110Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0110Component }])],
  exports: [Page0110Component]
})
export class Page0110Module {}
