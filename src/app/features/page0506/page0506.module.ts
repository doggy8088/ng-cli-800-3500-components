import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0506Component } from './page0506.component';

@NgModule({
  declarations: [Page0506Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0506Component }])],
  exports: [Page0506Component]
})
export class Page0506Module {}
