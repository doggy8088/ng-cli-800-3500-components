import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1087Component } from './page1087.component';

@NgModule({
  declarations: [Page1087Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1087Component }])],
  exports: [Page1087Component]
})
export class Page1087Module {}
