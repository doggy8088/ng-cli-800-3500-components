import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2974Component } from './page2974.component';

@NgModule({
  declarations: [Page2974Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2974Component }])],
  exports: [Page2974Component]
})
export class Page2974Module {}
