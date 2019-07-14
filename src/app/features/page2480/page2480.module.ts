import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2480Component } from './page2480.component';

@NgModule({
  declarations: [Page2480Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2480Component }])],
  exports: [Page2480Component]
})
export class Page2480Module {}
