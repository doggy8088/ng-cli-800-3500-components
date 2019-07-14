import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2028Component } from './page2028.component';

@NgModule({
  declarations: [Page2028Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2028Component }])],
  exports: [Page2028Component]
})
export class Page2028Module {}
