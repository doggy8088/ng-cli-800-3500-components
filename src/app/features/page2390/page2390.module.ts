import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2390Component } from './page2390.component';

@NgModule({
  declarations: [Page2390Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2390Component }])],
  exports: [Page2390Component]
})
export class Page2390Module {}
