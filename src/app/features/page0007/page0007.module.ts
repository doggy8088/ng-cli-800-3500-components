import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0007Component } from './page0007.component';

@NgModule({
  declarations: [Page0007Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0007Component }])],
  exports: [Page0007Component]
})
export class Page0007Module {}
