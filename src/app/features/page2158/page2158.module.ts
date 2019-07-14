import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2158Component } from './page2158.component';

@NgModule({
  declarations: [Page2158Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2158Component }])],
  exports: [Page2158Component]
})
export class Page2158Module {}
