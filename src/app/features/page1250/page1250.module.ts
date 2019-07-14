import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1250Component } from './page1250.component';

@NgModule({
  declarations: [Page1250Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1250Component }])],
  exports: [Page1250Component]
})
export class Page1250Module {}
