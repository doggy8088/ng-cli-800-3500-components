import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3229Component } from './page3229.component';

@NgModule({
  declarations: [Page3229Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3229Component }])],
  exports: [Page3229Component]
})
export class Page3229Module {}
