import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1471Component } from './page1471.component';

@NgModule({
  declarations: [Page1471Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1471Component }])],
  exports: [Page1471Component]
})
export class Page1471Module {}
