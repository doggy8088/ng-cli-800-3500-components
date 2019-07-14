import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1864Component } from './page1864.component';

@NgModule({
  declarations: [Page1864Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1864Component }])],
  exports: [Page1864Component]
})
export class Page1864Module {}
