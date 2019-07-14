import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2837Component } from './page2837.component';

@NgModule({
  declarations: [Page2837Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2837Component }])],
  exports: [Page2837Component]
})
export class Page2837Module {}
