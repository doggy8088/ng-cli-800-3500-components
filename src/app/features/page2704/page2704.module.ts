import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2704Component } from './page2704.component';

@NgModule({
  declarations: [Page2704Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2704Component }])],
  exports: [Page2704Component]
})
export class Page2704Module {}
