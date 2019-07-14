import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2174Component } from './page2174.component';

@NgModule({
  declarations: [Page2174Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2174Component }])],
  exports: [Page2174Component]
})
export class Page2174Module {}
