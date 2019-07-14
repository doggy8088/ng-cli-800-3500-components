import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3368Component } from './page3368.component';

@NgModule({
  declarations: [Page3368Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3368Component }])],
  exports: [Page3368Component]
})
export class Page3368Module {}
