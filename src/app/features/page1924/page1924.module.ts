import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1924Component } from './page1924.component';

@NgModule({
  declarations: [Page1924Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1924Component }])],
  exports: [Page1924Component]
})
export class Page1924Module {}
