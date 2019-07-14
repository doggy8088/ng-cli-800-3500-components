import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0140Component } from './page0140.component';

@NgModule({
  declarations: [Page0140Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0140Component }])],
  exports: [Page0140Component]
})
export class Page0140Module {}
