import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2126Component } from './page2126.component';

@NgModule({
  declarations: [Page2126Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2126Component }])],
  exports: [Page2126Component]
})
export class Page2126Module {}
