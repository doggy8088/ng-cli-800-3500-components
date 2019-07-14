import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0612Component } from './page0612.component';

@NgModule({
  declarations: [Page0612Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0612Component }])],
  exports: [Page0612Component]
})
export class Page0612Module {}
