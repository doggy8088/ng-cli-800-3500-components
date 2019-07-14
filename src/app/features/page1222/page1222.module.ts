import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1222Component } from './page1222.component';

@NgModule({
  declarations: [Page1222Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1222Component }])],
  exports: [Page1222Component]
})
export class Page1222Module {}
