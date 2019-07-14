import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0271Component } from './page0271.component';

@NgModule({
  declarations: [Page0271Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0271Component }])],
  exports: [Page0271Component]
})
export class Page0271Module {}
