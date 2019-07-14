import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2321Component } from './page2321.component';

@NgModule({
  declarations: [Page2321Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2321Component }])],
  exports: [Page2321Component]
})
export class Page2321Module {}
