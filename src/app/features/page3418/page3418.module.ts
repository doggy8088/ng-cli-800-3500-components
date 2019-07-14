import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3418Component } from './page3418.component';

@NgModule({
  declarations: [Page3418Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3418Component }])],
  exports: [Page3418Component]
})
export class Page3418Module {}
