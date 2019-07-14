import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3011Component } from './page3011.component';

@NgModule({
  declarations: [Page3011Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3011Component }])],
  exports: [Page3011Component]
})
export class Page3011Module {}
