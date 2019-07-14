import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2959Component } from './page2959.component';

@NgModule({
  declarations: [Page2959Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2959Component }])],
  exports: [Page2959Component]
})
export class Page2959Module {}
