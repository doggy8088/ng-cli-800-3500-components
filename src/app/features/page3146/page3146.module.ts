import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3146Component } from './page3146.component';

@NgModule({
  declarations: [Page3146Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3146Component }])],
  exports: [Page3146Component]
})
export class Page3146Module {}
