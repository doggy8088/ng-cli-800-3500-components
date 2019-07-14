import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2842Component } from './page2842.component';

@NgModule({
  declarations: [Page2842Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2842Component }])],
  exports: [Page2842Component]
})
export class Page2842Module {}
