import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2843Component } from './page2843.component';

@NgModule({
  declarations: [Page2843Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2843Component }])],
  exports: [Page2843Component]
})
export class Page2843Module {}
