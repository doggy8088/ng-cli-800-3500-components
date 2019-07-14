import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2389Component } from './page2389.component';

@NgModule({
  declarations: [Page2389Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2389Component }])],
  exports: [Page2389Component]
})
export class Page2389Module {}
