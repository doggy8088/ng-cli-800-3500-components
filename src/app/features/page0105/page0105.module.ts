import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0105Component } from './page0105.component';

@NgModule({
  declarations: [Page0105Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0105Component }])],
  exports: [Page0105Component]
})
export class Page0105Module {}
