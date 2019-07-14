import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1976Component } from './page1976.component';

@NgModule({
  declarations: [Page1976Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1976Component }])],
  exports: [Page1976Component]
})
export class Page1976Module {}
