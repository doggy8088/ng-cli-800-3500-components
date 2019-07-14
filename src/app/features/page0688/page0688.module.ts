import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0688Component } from './page0688.component';

@NgModule({
  declarations: [Page0688Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0688Component }])],
  exports: [Page0688Component]
})
export class Page0688Module {}
