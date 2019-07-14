import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3053Component } from './page3053.component';

@NgModule({
  declarations: [Page3053Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3053Component }])],
  exports: [Page3053Component]
})
export class Page3053Module {}
