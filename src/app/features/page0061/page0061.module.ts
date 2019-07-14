import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0061Component } from './page0061.component';

@NgModule({
  declarations: [Page0061Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0061Component }])],
  exports: [Page0061Component]
})
export class Page0061Module {}
