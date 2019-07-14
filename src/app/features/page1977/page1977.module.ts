import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1977Component } from './page1977.component';

@NgModule({
  declarations: [Page1977Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1977Component }])],
  exports: [Page1977Component]
})
export class Page1977Module {}
