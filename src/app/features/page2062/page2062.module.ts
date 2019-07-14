import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2062Component } from './page2062.component';

@NgModule({
  declarations: [Page2062Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2062Component }])],
  exports: [Page2062Component]
})
export class Page2062Module {}
