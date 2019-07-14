import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0880Component } from './page0880.component';

@NgModule({
  declarations: [Page0880Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0880Component }])],
  exports: [Page0880Component]
})
export class Page0880Module {}
