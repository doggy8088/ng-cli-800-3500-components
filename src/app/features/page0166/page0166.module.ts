import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0166Component } from './page0166.component';

@NgModule({
  declarations: [Page0166Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0166Component }])],
  exports: [Page0166Component]
})
export class Page0166Module {}
