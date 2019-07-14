import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3035Component } from './page3035.component';

@NgModule({
  declarations: [Page3035Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3035Component }])],
  exports: [Page3035Component]
})
export class Page3035Module {}
