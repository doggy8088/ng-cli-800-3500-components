import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2985Component } from './page2985.component';

@NgModule({
  declarations: [Page2985Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2985Component }])],
  exports: [Page2985Component]
})
export class Page2985Module {}
