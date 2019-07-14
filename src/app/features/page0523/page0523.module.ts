import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0523Component } from './page0523.component';

@NgModule({
  declarations: [Page0523Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0523Component }])],
  exports: [Page0523Component]
})
export class Page0523Module {}
