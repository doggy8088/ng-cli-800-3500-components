import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0411Component } from './page0411.component';

@NgModule({
  declarations: [Page0411Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0411Component }])],
  exports: [Page0411Component]
})
export class Page0411Module {}
