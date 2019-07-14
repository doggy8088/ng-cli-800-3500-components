import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0945Component } from './page0945.component';

@NgModule({
  declarations: [Page0945Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0945Component }])],
  exports: [Page0945Component]
})
export class Page0945Module {}
