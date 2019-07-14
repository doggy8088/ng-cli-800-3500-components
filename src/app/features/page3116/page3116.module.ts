import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3116Component } from './page3116.component';

@NgModule({
  declarations: [Page3116Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3116Component }])],
  exports: [Page3116Component]
})
export class Page3116Module {}
