import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0056Component } from './page0056.component';

@NgModule({
  declarations: [Page0056Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0056Component }])],
  exports: [Page0056Component]
})
export class Page0056Module {}
