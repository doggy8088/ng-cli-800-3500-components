import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2886Component } from './page2886.component';

@NgModule({
  declarations: [Page2886Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2886Component }])],
  exports: [Page2886Component]
})
export class Page2886Module {}
