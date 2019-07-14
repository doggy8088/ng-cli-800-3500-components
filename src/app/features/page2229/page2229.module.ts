import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2229Component } from './page2229.component';

@NgModule({
  declarations: [Page2229Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2229Component }])],
  exports: [Page2229Component]
})
export class Page2229Module {}
