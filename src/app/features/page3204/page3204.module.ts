import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3204Component } from './page3204.component';

@NgModule({
  declarations: [Page3204Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3204Component }])],
  exports: [Page3204Component]
})
export class Page3204Module {}
