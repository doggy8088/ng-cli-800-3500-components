import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0690Component } from './page0690.component';

@NgModule({
  declarations: [Page0690Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0690Component }])],
  exports: [Page0690Component]
})
export class Page0690Module {}
