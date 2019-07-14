import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3148Component } from './page3148.component';

@NgModule({
  declarations: [Page3148Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3148Component }])],
  exports: [Page3148Component]
})
export class Page3148Module {}
