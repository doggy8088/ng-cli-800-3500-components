import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2434Component } from './page2434.component';

@NgModule({
  declarations: [Page2434Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2434Component }])],
  exports: [Page2434Component]
})
export class Page2434Module {}
