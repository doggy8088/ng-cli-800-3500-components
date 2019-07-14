import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3251Component } from './page3251.component';

@NgModule({
  declarations: [Page3251Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3251Component }])],
  exports: [Page3251Component]
})
export class Page3251Module {}
