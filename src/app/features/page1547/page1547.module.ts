import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1547Component } from './page1547.component';

@NgModule({
  declarations: [Page1547Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1547Component }])],
  exports: [Page1547Component]
})
export class Page1547Module {}
