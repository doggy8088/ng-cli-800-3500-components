import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2797Component } from './page2797.component';

@NgModule({
  declarations: [Page2797Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2797Component }])],
  exports: [Page2797Component]
})
export class Page2797Module {}
