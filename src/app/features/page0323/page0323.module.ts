import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0323Component } from './page0323.component';

@NgModule({
  declarations: [Page0323Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0323Component }])],
  exports: [Page0323Component]
})
export class Page0323Module {}
