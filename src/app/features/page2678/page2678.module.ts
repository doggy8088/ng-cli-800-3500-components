import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2678Component } from './page2678.component';

@NgModule({
  declarations: [Page2678Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2678Component }])],
  exports: [Page2678Component]
})
export class Page2678Module {}
