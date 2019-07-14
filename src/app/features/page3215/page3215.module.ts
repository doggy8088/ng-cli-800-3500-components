import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3215Component } from './page3215.component';

@NgModule({
  declarations: [Page3215Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3215Component }])],
  exports: [Page3215Component]
})
export class Page3215Module {}
