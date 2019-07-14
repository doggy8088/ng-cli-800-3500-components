import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2251Component } from './page2251.component';

@NgModule({
  declarations: [Page2251Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2251Component }])],
  exports: [Page2251Component]
})
export class Page2251Module {}
