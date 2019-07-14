import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2312Component } from './page2312.component';

@NgModule({
  declarations: [Page2312Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2312Component }])],
  exports: [Page2312Component]
})
export class Page2312Module {}
