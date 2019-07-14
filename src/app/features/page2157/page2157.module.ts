import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2157Component } from './page2157.component';

@NgModule({
  declarations: [Page2157Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2157Component }])],
  exports: [Page2157Component]
})
export class Page2157Module {}
