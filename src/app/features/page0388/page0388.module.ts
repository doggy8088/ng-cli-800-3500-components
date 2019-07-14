import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0388Component } from './page0388.component';

@NgModule({
  declarations: [Page0388Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0388Component }])],
  exports: [Page0388Component]
})
export class Page0388Module {}
