import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2564Component } from './page2564.component';

@NgModule({
  declarations: [Page2564Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2564Component }])],
  exports: [Page2564Component]
})
export class Page2564Module {}
