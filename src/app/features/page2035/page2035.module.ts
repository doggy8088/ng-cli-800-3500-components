import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2035Component } from './page2035.component';

@NgModule({
  declarations: [Page2035Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2035Component }])],
  exports: [Page2035Component]
})
export class Page2035Module {}
