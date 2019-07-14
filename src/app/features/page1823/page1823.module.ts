import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1823Component } from './page1823.component';

@NgModule({
  declarations: [Page1823Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1823Component }])],
  exports: [Page1823Component]
})
export class Page1823Module {}
