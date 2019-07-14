import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1858Component } from './page1858.component';

@NgModule({
  declarations: [Page1858Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1858Component }])],
  exports: [Page1858Component]
})
export class Page1858Module {}
