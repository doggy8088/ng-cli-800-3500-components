import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3028Component } from './page3028.component';

@NgModule({
  declarations: [Page3028Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3028Component }])],
  exports: [Page3028Component]
})
export class Page3028Module {}
