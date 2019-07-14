import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1616Component } from './page1616.component';

@NgModule({
  declarations: [Page1616Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1616Component }])],
  exports: [Page1616Component]
})
export class Page1616Module {}
