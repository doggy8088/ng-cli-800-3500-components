import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3139Component } from './page3139.component';

@NgModule({
  declarations: [Page3139Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3139Component }])],
  exports: [Page3139Component]
})
export class Page3139Module {}
