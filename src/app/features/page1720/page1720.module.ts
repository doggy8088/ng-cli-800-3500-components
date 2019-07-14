import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1720Component } from './page1720.component';

@NgModule({
  declarations: [Page1720Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1720Component }])],
  exports: [Page1720Component]
})
export class Page1720Module {}
