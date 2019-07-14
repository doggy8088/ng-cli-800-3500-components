import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1566Component } from './page1566.component';

@NgModule({
  declarations: [Page1566Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1566Component }])],
  exports: [Page1566Component]
})
export class Page1566Module {}
