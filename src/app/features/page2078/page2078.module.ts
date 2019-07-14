import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2078Component } from './page2078.component';

@NgModule({
  declarations: [Page2078Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2078Component }])],
  exports: [Page2078Component]
})
export class Page2078Module {}
