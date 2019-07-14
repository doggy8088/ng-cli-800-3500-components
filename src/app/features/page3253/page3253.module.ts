import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3253Component } from './page3253.component';

@NgModule({
  declarations: [Page3253Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3253Component }])],
  exports: [Page3253Component]
})
export class Page3253Module {}
